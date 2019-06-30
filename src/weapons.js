import {drawCircle, plot} from './gfx.js';
import {clipTerrain} from './terrain.js';
import {within, cycle, random, randomInt} from './math.js';
import {createOsc, audio} from './sound.js';
import {PLAYER_TANK_BOUNDING_RADIUS} from './constants.js';

export function drawExplosion(ctx, x, y, r) {
  const color = 255 - (16 * (r % 16));
  drawCircle(ctx, x, y, r, `rgb(${color}, 0, 0)`);
}

export function drawDirt(ctx, x, y, r, c) {
  drawCircle(ctx, x, y, r, c);
}

export const EXPLOSION_TYPES = {
  tracer: {
    create(spec, x, y) {
      return {type:'tracer'};
    },
    update(explosion) {},
    draw(explosion, foreground) {},
    stop(explosion) {},
    clip(explosion, terrain) {},
    damage(explosion, player) {}
  },
  blast: {
    create(spec, x, y) {
      const {r} = spec;
      const osc = createOsc();
      osc.start();
      return {type:'blast', x, y, r, cr:0, osc};
    },
    update(explosion) {
      return ++explosion.cr < explosion.r;
    },
    draw(explosion, foreground) {
      const {x, y, cr, osc} = explosion;
      const f = cycle(explosion.cr, 6) % 2 === 0 ? 220 : 440;
      osc.frequency.setValueAtTime(f, audio.currentTime);
      drawExplosion(foreground, x, y, cr);
    },
    stop(explosion) {
      const {osc} = explosion;
      osc.stop();
    },
    clip(explosion, terrain) {
      const {x, y, cr} = explosion;
      clipTerrain(terrain, (ctx) => drawExplosion(ctx, x, y, cr));
    },
    damage(explosion, player) {
      if (within(explosion.x, explosion.y, player.x, player.y, explosion.r)) {
        return 100;
      } else if (
        within(explosion.x, explosion.y, player.x-PLAYER_TANK_BOUNDING_RADIUS, player.y, explosion.r) ||
        within(explosion.x, explosion.y, player.x+PLAYER_TANK_BOUNDING_RADIUS, player.y, explosion.r)
      ) {
        return 50;
      }
    }
  },
  dirt: {
    create(spec, x, y) {
      const {r} = spec;
      const osc = createOsc();
      osc.start();
      return {type:'dirt', x, y, r, cr:0, osc};
    },
    stop(explosion) {
      const {osc} = explosion;
      osc.stop();
    },
    update(explosion) {
      return ++explosion.cr < explosion.r;
    },
    draw(explosion, foreground, terrain) {
      const {x, y, cr, osc} = explosion;
      const f = explosion.cr % 2 === 0 ? 220 + explosion.cr : 0;
      osc.frequency.setValueAtTime(f, audio.currentTime);
      osc.frequency.setValueAtTime(0, audio.currentTime+0.1);
      drawDirt(foreground, x, y, cr, terrain.color);
    },
    clip(explosion, terrain) {
      const {x, y, cr} = explosion;
      drawDirt(terrain, x, y, cr);
    },
    damage(explosion, player) {}
  },
  digBomb: {
    create(spec, x, y) {
      const {r} = spec;
      const osc = createOsc();
      osc.start();
      return {type:'digBomb', x, y, r, cr:0, osc};
    },
    stop(explosion) {
      const {osc} = explosion;
      osc.stop();
    },
    update(explosion) {
      return ++explosion.cr < explosion.r;
    },
    draw(explosion, foreground, terrain) {
      const {x, y, cr, osc} = explosion;
      const f = explosion.cr % 2 === 0 ? 440 - explosion.cr : 0;
      osc.frequency.setValueAtTime(f, audio.currentTime);
      osc.frequency.setValueAtTime(0, audio.currentTime+0.1);
      drawDirt(foreground, x, y, cr, 'brown');
    },
    clip(explosion, terrain) {
      const {x, y, cr} = explosion;
      clipTerrain(terrain, (ctx) => drawDirt(ctx, x, y, cr));
    },
    damage(explosion, player) {}
  },
  dirtCone: {
    create(spec, x, y) {
      const {r} = spec;
      const pattern = [];
      const osc = createOsc();
      osc.start();
      return {type:'dirtCone', x, y, r, cr:0, osc, pattern};
    },
    stop(explosion) {
      const {osc} = explosion;
      osc.stop();
    },
    update(explosion) {
      return ++explosion.cr < explosion.r;
    },
    draw(explosion, foreground, terrain) {
      const {x, y, cr, osc, pattern} = explosion;

      let row = [];
      for (let cx=0; cx<=1+cr*2; cx++) {
        row.push(randomInt(0, 3) === 0);
      }
      pattern.push(row);

      for (let cy=0; cy<pattern.length; cy++) {
        const row = pattern[cy];
        for (let cx=0; cx<row.length; cx++) {
          if (row[cx]) plot(foreground, x-cy+cx, y-cy, terrain.color);
        }
      }

      const f = explosion.cr % 2 === 0 ? 220 + explosion.cr : 0;
      osc.frequency.setValueAtTime(f, audio.currentTime);
      osc.frequency.setValueAtTime(0, audio.currentTime+0.1);
    },
    clip(explosion, terrain) {
      const {x, y, pattern} = explosion;

      for (let cy=0; cy<pattern.length; cy++) {
        const row = pattern[cy];
        for (let cx=0; cx<row.length; cx++) {
          if (row[cx]) plot(terrain, x-cy+cx, y-cy, terrain.color);
        }
      }
    },
    damage(explosion, player) {}
  },
}
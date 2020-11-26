export const W = 1680;
export const H = 500;
export const Z = 2;

export const SKY_COLORS = [
  {from:[42, 78, 108], to:[0, 0, 0]},
  {from:[82, 120, 187], to:[201, 218, 236]},
  {from:[94, 171, 184], to:[225, 172, 139]},
  {from:[49, 76, 148], to:[242, 171, 85]},
  {from:[51, 89, 135], to:[163, 198, 220]},
  {from:[105, 95, 108], to:[223, 183, 110]},
];

export const MAX_PLAYERS = 6;

export const PLAYER_COLORS = [
  ['tomato', 'darkred'],
  ['deepskyblue', 'royalblue'],
  ['greenyellow', 'green'],
  ['gold', 'peru'],
  ['hotpink', 'mediumvioletred'],
  ['blueviolet', 'indigo'],
];
export const PLAYER_STARTING_WEAPONS = [
  {type: 'babyMissile', ammo:Infinity},
  {type: 'tracer', ammo:Infinity},
]

export const WEAPON_TYPES = {
  tracer: {id:'tracer', name:'Tracer', projectile:{type:'normal'}, explosion:{type:'tracer'},cost:0,bundle:"Infinity"},
  babyMissile: {id:'babyMissile', name:'Baby Missile', projectile:{type:'normal'}, explosion:{type:'blast', r:5},cost:0,bundle:"Infinity"},
  missile: {id:'missile', name:'Missile', projectile:{type:'normal'}, explosion:{type:'blast', r:20},cost:1875,bundle:5},
  babyNuke: {id:'babyNuke', name:'Baby Nuke', projectile:{type:'normal'}, explosion:{type:'blast', r:50},cost:10000,bundle:3},
  nuke: {id:'nuke', name:'Nuke', projectile:{type:'normal'}, explosion:{type:'blast', r:100},cost:12000,bundle:1},
  babyRoller: {id:'babyRoller', name:'Baby Roller', projectile:{type:'roller'}, explosion:{type:'blast', r:15},cost:5000,bundle:10},
  roller: {id:'roller', name:'Roller', projectile:{type:'roller'}, explosion:{type:'blast', r:35},cost:6000,bundle:5},
  superRoller: {id:'superRoller', name:'Super Roller', projectile:{type:'roller'}, explosion:{type:'blast', r:60},cost:6750,bundle:2},
  leapfrog: {id:'leapfrog', name:'Leapfrog', projectile:{type:'leapfrog', n:3, s:10}, explosion:{type:'blast', r:35},cost:10000,bundle:2},
  superLeapfrog: {id:'superLeapfrog', name:'Super Leapfrog', projectile:{type:'leapfrog', n:6, s:10}, explosion:{type:'blast', r:50},cost:12000,bundle:1},
  mirv: {id:'mirv', name:'MIRV', projectile:{type:'mirv', n:3, s:8}, explosion:{type:'blast', r:35},cost:10000,bundle:3},
  xmirv: {id:'xmirv', name:'X-MIRV', projectile:{type:'mirv', n:5, s:8}, explosion:{type:'blast', r:45},cost:20000,bundle:1},
  smallDirt: {id:'smallDirt', name:'Small Dirt', projectile:{type:'normal'}, explosion:{type:'dirt', r:25},cost:5000,bundle:10},
  dirt: {id:'dirt', name:'Dirt', projectile:{type:'normal'}, explosion:{type:'dirt', r:50},cost:5000,bundle:5},
  largeDirt: {id:'largeDirt', name:'Ton of Dirt', projectile:{type:'normal'}, explosion:{type:'dirt', r:75},cost:6750,bundle:2},
  smallDigBomb: {id:'smallDigBomb', name:'Small Dig Bomb', projectile:{type:'normal'}, explosion:{type:'digBomb', r:25},cost:5000,bundle:10},
  digBomb: {id:'digBomb', name:'Dig Bomb', projectile:{type:'normal'}, explosion:{type:'digBomb', r:50},cost:5000,bundle:5},
  largeDigBomb: {id:'largeDigBomb', name:'Large Dig Bomb', projectile:{type:'normal'}, explosion:{type:'digBomb', r:75},cost:6750,bundle:2},
};

export const SHIELD_TYPES = {
  shield: {id:'shield', r:15, s:1, energy:100, projectileEffect:'nullify', color:'white'},
  heavyShield: {id:'heavyShield', r:15, s:2, energy:200, projectileEffect:'nullify', color:'white'},
  springShield: {id:'springShield', r:15, s:1, energy:100, projectileEffect:'spring', color:'deeppink'},
};

export const DEATH_SPECS = [
  {type: 'blast', r: 5},
  {type: 'blast', r: 15},
  {type: 'blast', r: 30},
  {type: 'blast', r: 60},
  {type: 'dirt', r: 25},
  {type: 'dirt', r: 50},
  {type: 'dirt', r: 75},
  {type: 'digBomb', r: 25},
  {type: 'digBomb', r: 50},
  {type: 'digBomb', r: 75},
  {type: 'dirtCone', r: 50},
  {type: 'dirtCone', r: 100},
  {type: 'dirtCone', r: 200},
  //{type: 'dirtCone', r: H},//This takes way too long on bigger playfields.
];

export const PLAYER_STARTING_TOOLS = [
  {type: 'parachute', ammo: 1},
];

export const MAX_WIND = 25;
export const DEFAULT_KEYPRESS_DELAY = 150;

export const PLAYER_MAX_ENERGY = 100;
export const PLAYER_ENERGY_POWER_MULTIPLIER = 15;
export const PLAYER_INITIAL_POWER = 300;
export const PLAYER_FALL_DAMAGE_HEIGHT = 25;
export const PLAYER_FALL_DAMAGE_FACTOR = 2;
export const PLAYER_EXPLOSION_PARTICLE_POWER = 500;
export const PLAYER_TANK_BOUNDING_RADIUS = 4;
export const PLAYER_TANK_Y_FOOTPRINT = -2;
export const PLAYER_ANGLE_INCREMENT = 1;
export const PLAYER_ANGLE_FAST_INCREMENT = 3;
export const PLAYER_POWER_INCREMENT = 1;
export const PLAYER_POWER_FAST_INCREMENT = 10;
export const PLAYER_ANGLE_TICK_SOUND_INTERVAL = 2;
export const PLAYER_POWER_TICK_SOUND_INTERVAL = 2;
export const PLAYER_STARTING_MONEY = 10000;

export const PROJECTILE_POWER_REDUCTION_FACTOR = 10;
export const PROJECTILE_WIND_REDUCTION_FACTOR = 10;
export const PROJECTILE_ITERATIONS_PER_FRAME = 50;
export const PROJECTILE_ITERATION_PROGRESS = 0.01;
export const PROJECTILE_MIN_SOUND_FREQUENCY = 220;
export const PROJECTILE_MAX_SOUND_FREQUENCY = 2200;
export const TRAJECTORY_FADE_SPEED = 10;
export const TRAJECTORY_FLOAT_SPEED = 0.3;

export const PARTICLE_AMOUNT = 30;
export const PARTICLE_MIN_POWER_FACTOR = 0.4;
export const PARTICLE_MAX_POWER_FACTOR = 1;
export const PARTICLE_MIN_LIFETIME = 5;
export const PARTICLE_TIME_FACTOR = 13;
export const PARTICLE_POWER_REDUCTION_FACTOR = 15;
export const PARTICLE_WIND_REDUCTION_FACTOR = 3;
export const PARTICLE_FADE_AMOUNT = 1;

export const MAX_EXPLOSION_SHAKE_FACTOR = 35;
export const EXPLOSION_SHAKE_REDUCTION_FACTOR = 8;

export const FONT_WIDTH = Math.ceil(3*(W/640));
export const FONT_HEIGHT = Math.ceil(5*(H/400));

export const SOUND_MUSIC_VOLUME = 0.3;
export const SOUND_SFX_VOLUME = 0.1;

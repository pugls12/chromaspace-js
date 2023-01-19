import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprites from "./Sprites/Sprites.js";
import Notes from "./Notes/Notes.js";
import Jumpscare from "./Jumpscare/Jumpscare.js";
import Bar from "./Bar/Bar.js";
import Background from "./Background/Background.js";
import PointSystem from "./PointSystem/PointSystem.js";
import NoteHitEffect from "./NoteHitEffect/NoteHitEffect.js";
import LazyModeInUse from "./LazyModeInUse/LazyModeInUse.js";
import OldEndScreen from "./OldEndScreen/OldEndScreen.js";
import Thumbnail from "./Thumbnail/Thumbnail.js";
import EndScreen from "./EndScreen/EndScreen.js";
import MineNoteExplosion from "./MineNoteExplosion/MineNoteExplosion.js";
import _321Go from "./_321Go/_321Go.js";
import Song from "./Song/Song.js";
import CoverScreen from "./CoverScreen/CoverScreen.js";
import RingAndGoldNoteThing from "./RingAndGoldNoteThing/RingAndGoldNoteThing.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprites: new Sprites({
    x: 10,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Notes: new Notes({
    x: -41,
    y: -129,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 15
  }),
  Jumpscare: new Jumpscare({
    x: 5,
    y: -12,
    direction: 90,
    costumeNumber: 1,
    size: 120,
    visible: false,
    layerOrder: 12
  }),
  Bar: new Bar({
    x: 0,
    y: -100,
    direction: 90,
    costumeNumber: 1,
    size: 100.33333333333336,
    visible: true,
    layerOrder: 2
  }),
  Background: new Background({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 7,
    size: 100.33333333333336,
    visible: true,
    layerOrder: 1
  }),
  PointSystem: new PointSystem({
    x: -100,
    y: -36,
    direction: 90,
    costumeNumber: 12,
    size: 80,
    visible: false,
    layerOrder: 4
  }),
  NoteHitEffect: new NoteHitEffect({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  LazyModeInUse: new LazyModeInUse({
    x: 0,
    y: 50,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  OldEndScreen: new OldEndScreen({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 9,
    size: 141.96390168705847,
    visible: false,
    layerOrder: 6
  }),
  Thumbnail: new Thumbnail({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  EndScreen: new EndScreen({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  MineNoteExplosion: new MineNoteExplosion({
    x: -36,
    y: -100,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  _321Go: new _321Go({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 114.99999999999999,
    visible: false,
    layerOrder: 10
  }),
  Song: new Song({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 11
  }),
  CoverScreen: new CoverScreen({
    x: -4,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 105,
    visible: true,
    layerOrder: 16
  }),
  RingAndGoldNoteThing: new RingAndGoldNoteThing({
    x: -36,
    y: -100,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;

import avatarScr1 from "./ui/images/avatar-1.png";
import avatarScr2 from "./ui/images/avatar-2.png";
import avatarScr3 from "./ui/images/avatar-3.png";
import avatarScr4 from "./ui/images/avatar-4.png";

export const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  TRINGLE: "tringle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRINGLE,
  GAME_SYMBOLS.SQUARE,
];

export const PLAYERS = [
  {
    id: 1,
    name: "Владислав",
    rating: 1230,
    avatar: avatarScr1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "Валерия",
    rating: 1230,
    avatar: avatarScr2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Алиса",
    rating: 1200,
    avatar: avatarScr3,
    symbol: GAME_SYMBOLS.TRINGLE,
  },
  {
    id: 4,
    name: "Добрыня",
    rating: 1100,
    avatar: avatarScr4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

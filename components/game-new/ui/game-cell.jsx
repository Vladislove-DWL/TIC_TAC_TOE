import clsx from "clsx";
import { GameSymbol } from "./game-symbol";
import { memo } from "react";

export const GameCell = memo(function GameCell({
  onClick,
  isWinner,
  disabled,
  symbol,
  index,
}) {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick(index)}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-yellow-500/30",
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
});

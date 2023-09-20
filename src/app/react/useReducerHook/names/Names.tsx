"use client";
import { useReducer } from "react";
import style from "./style.module.css";

const names = ["John", "Jim", "Jules", "Jack", "Josh"];

type Action =
  | {
      type: "add";
      name: string;
    }
  | {
      type: "remove";
      name: string;
    }
  | {
      type: "clear";
    };

function namesReducer(state: Array<string>, action: Action) {
  const { type } = action;

  switch (type) {
    case "add": {
      if (state.includes(action.name)) {
        return state;
      }
      return [...state, action.name];
    }
    case "remove": {
      return state.filter((d) => d !== action.name);
    }
    case "clear": {
      return [];
    }
    default:
      return state;
  }
}

function NameButton({ name, dispatchName, isSelected }: any) {
  return (
    <div className={style.button__group} data-selected={isSelected}>
      <h4 className={style.name}>{name}</h4>
      <button
        onClick={() => dispatchName({ type: "remove", name })}
        title="Remove"
        className={style.name__button}
      >
        ×
      </button>

      <button
        onClick={() => dispatchName({ type: "add", name })}
        title="Add"
        className={style.name__button}
      >
        +
      </button>
    </div>
  );
}

export function Names() {
  const [selectedNames, dispatchName] = useReducer(namesReducer, []);

  return (
    <div className={style.box}>
      <div className={style.flex__group}>
        {names.map((name) => (
          <NameButton
            className={style.text}
            key={name}
            name={name}
            dispatchName={dispatchName}
            isSelected={selectedNames.includes(name)}
          />
        ))}
      </div>

      {selectedNames.length ? (
        <div className={style.selected__names}>
          <h2 className={style.seclected}>Selected</h2>
          {selectedNames.join(", ")}
          <button
            className={style.name__button_clear}
            onClick={() => dispatchName({ type: "clear" })}
          >
            Clear
          </button>
        </div>
      ) : null}
    </div>
  );
}

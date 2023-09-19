"use client";
import React, { useReducer } from "react";
import style from "./style.module.css";

type Menu = null | "file" | "edit" | "view";

const menuReducer = (current: Menu, action: Menu) => {
  if (action === current) {
    return null;
  }
  return action;
};
export default function Menu() {
  const [openMenu, tap] = useReducer(menuReducer, null);
  return (
    <div className={style.menu__box}>
      <div className={style.button__group}>
        <button className={style.button} onClick={() => tap("file")}>
          File
        </button>
        <button className={style.button} onClick={() => tap("edit")}>
          Edit
        </button>
        <button className={style.button} onClick={() => tap("view")}>
          View
        </button>
        <button className={style.button} onClick={() => tap(null)}>
          Close
        </button>
      </div>

      {openMenu && (
        <div className={style.content__box}>
          {openMenu === "file" && (
            <div>
              <p className={style.content__text}>File Menu Content</p>
            </div>
          )}
          {openMenu === "edit" && (
            <div>
              <p className={style.content__text}>Edit Menu Content</p>
            </div>
          )}
          {openMenu === "view" && (
            <div>
              <p className={style.content__text}>View Menu Content</p>
            </div>
          )}
        </div>
      )}
      <pre className={style.code__box}>
        <code className={style.code}>
          <span>const menuReducer = </span>{" "}
          <span>(current: Menu, action: Menu)</span>
          <span>=&gt;</span> &#123;{" "}
          <span className={style.scope}> if (action === current) &#123; </span>{" "}
          <span className={style.scope}> return null;</span>
          <span className={style.scope}>&#125;</span>
          return action;
          <span className={style.scope}>&#125;</span>
        </code>
      </pre>
    </div>
  );
}

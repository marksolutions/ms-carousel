import { css } from "lit-element";

export const defaultStyle = css`
  .splide__container {
    box-sizing: border-box;
    position: relative;
  }
  .splide__list {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
    transform-style: preserve-3d;
  }
  .splide.is-initialized:not(.is-active) .splide__list {
    display: block;
  }
  .splide__pagination {
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0;
    pointer-events: none;
  }
  .splide__pagination li {
    display: inline-block;
    line-height: 1;
    list-style-type: none;
    margin: 0;
    pointer-events: auto;
  }
  .splide__progress__bar {
    width: 0;
  }
  .splide {
    outline: none;
    position: relative;
    visibility: hidden;
  }
  .splide.is-initialized,
  .splide.is-rendered {
    visibility: visible;
  }
  .splide__slide {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    list-style-type: none !important;
    margin: 0;
    outline: none;
    position: relative;
  }
  .splide__slide img {
    vertical-align: bottom;
  }
  .splide__slider {
    position: relative;
  }
  .splide__spinner {
    animation: splide-loading 1s linear infinite;
    border: 2px solid #999;
    border-left-color: transparent;
    border-radius: 50%;
    bottom: 0;
    contain: strict;
    display: inline-block;
    height: 20px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
  }
  .splide__track {
    overflow: hidden;
    position: relative;
    z-index: 0;
  }
  @keyframes splide-loading {
    0% {
      transform: rotate(0);
    }
    to {
      transform: rotate(1turn);
    }
  }
  .splide--draggable > .splide__slider > .splide__track,
  .splide--draggable > .splide__track {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .splide--fade > .splide__slider > .splide__track > .splide__list,
  .splide--fade > .splide__track > .splide__list {
    display: block;
  }
  .splide--fade
    > .splide__slider
    > .splide__track
    > .splide__list
    > .splide__slide,
  .splide--fade > .splide__track > .splide__list > .splide__slide {
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    z-index: 0;
  }
  .splide--fade
    > .splide__slider
    > .splide__track
    > .splide__list
    > .splide__slide.is-active,
  .splide--fade > .splide__track > .splide__list > .splide__slide.is-active {
    opacity: 1;
    position: relative;
    z-index: 1;
  }
  .splide--rtl {
    direction: rtl;
  }
  .splide--ttb.is-active > .splide__slider > .splide__track > .splide__list,
  .splide--ttb.is-active > .splide__track > .splide__list {
    display: block;
  }
  .splide__arrow {
    -ms-flex-align: center;
    align-items: center;
    background: #ccc;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    display: -ms-flexbox;
    display: flex;
    height: 2em;
    -ms-flex-pack: center;
    justify-content: center;
    opacity: 0.7;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2em;
    z-index: 1;
  }
  .splide__arrow svg {
    fill: #000;
    height: 1.2em;
    width: 1.2em;
  }
  .splide__arrow:hover {
    opacity: 0.9;
  }
  .splide__arrow:focus {
    outline: none;
  }
  .splide__arrow--prev {
    left: 1em;
  }
  .splide__arrow--prev svg {
    transform: scaleX(-1);
  }
  .splide__arrow--next {
    right: 1em;
  }
  .splide__pagination {
    bottom: 0.5em;
    left: 0;
    padding: 0 1em;
    position: absolute;
    right: 0;
    z-index: 1;
  }
  .splide__pagination__page {
    background: #ccc;
    border: 0;
    border-radius: 50%;
    display: inline-block;
    height: 8px;
    margin: 3px;
    opacity: 0.7;
    padding: 0;
    transition: transform 0.2s linear;
    width: 8px;
  }
  .splide__pagination__page.is-active {
    background: #fff;
    transform: scale(1.4);
  }
  .splide__pagination__page:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  .splide__pagination__page:focus {
    outline: none;
  }
  .splide__progress__bar {
    background: #ccc;
    height: 3px;
  }
  .splide--nav
    > .splide__slider
    > .splide__track
    > .splide__list
    > .splide__slide,
  .splide--nav > .splide__track > .splide__list > .splide__slide {
    border: 3px solid transparent;
    cursor: pointer;
  }
  .splide--nav
    > .splide__slider
    > .splide__track
    > .splide__list
    > .splide__slide.is-active,
  .splide--nav > .splide__track > .splide__list > .splide__slide.is-active {
    border: 3px solid #000;
  }
  .splide--nav
    > .splide__slider
    > .splide__track
    > .splide__list
    > .splide__slide:focus,
  .splide--nav > .splide__track > .splide__list > .splide__slide:focus {
    outline: none;
  }
  .splide--rtl > .splide__arrows .splide__arrow--prev,
  .splide--rtl
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--prev,
  .splide--rtl > .splide__track > .splide__arrows .splide__arrow--prev {
    left: auto;
    right: 1em;
  }
  .splide--rtl > .splide__arrows .splide__arrow--prev svg,
  .splide--rtl
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--prev
    svg,
  .splide--rtl > .splide__track > .splide__arrows .splide__arrow--prev svg {
    transform: scaleX(1);
  }
  .splide--rtl > .splide__arrows .splide__arrow--next,
  .splide--rtl
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--next,
  .splide--rtl > .splide__track > .splide__arrows .splide__arrow--next {
    left: 1em;
    right: auto;
  }
  .splide--rtl > .splide__arrows .splide__arrow--next svg,
  .splide--rtl
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--next
    svg,
  .splide--rtl > .splide__track > .splide__arrows .splide__arrow--next svg {
    transform: scaleX(-1);
  }
  .splide--ttb > .splide__arrows .splide__arrow,
  .splide--ttb
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow,
  .splide--ttb > .splide__track > .splide__arrows .splide__arrow {
    left: 50%;
    transform: translate(-50%);
  }
  .splide--ttb > .splide__arrows .splide__arrow--prev,
  .splide--ttb
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--prev,
  .splide--ttb > .splide__track > .splide__arrows .splide__arrow--prev {
    top: 1em;
  }
  .splide--ttb > .splide__arrows .splide__arrow--prev svg,
  .splide--ttb
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--prev
    svg,
  .splide--ttb > .splide__track > .splide__arrows .splide__arrow--prev svg {
    transform: rotate(-90deg);
  }
  .splide--ttb > .splide__arrows .splide__arrow--next,
  .splide--ttb
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--next,
  .splide--ttb > .splide__track > .splide__arrows .splide__arrow--next {
    bottom: 1em;
    top: auto;
  }
  .splide--ttb > .splide__arrows .splide__arrow--next svg,
  .splide--ttb
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--next
    svg,
  .splide--ttb > .splide__track > .splide__arrows .splide__arrow--next svg {
    transform: rotate(90deg);
  }
  .splide--ttb > .splide__pagination,
  .splide--ttb > .splide__slider > .splide__pagination {
    bottom: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    left: auto;
    padding: 1em 0;
    right: 0.5em;
    top: 0;
  }
`;

export const skyblueStyle = css`
  .splide--nav
    > .splide__slider
    > .splide__track
    > .splide__list
    > .splide__slide,
  .splide--nav > .splide__track > .splide__list > .splide__slide {
    border: 3px solid transparent;
    cursor: pointer;
    opacity: 0.7;
  }
  .splide--nav
    > .splide__slider
    > .splide__track
    > .splide__list
    > .splide__slide.is-active,
  .splide--nav > .splide__track > .splide__list > .splide__slide.is-active {
    border: 3px solid #00bfff;
    opacity: 1;
  }
  .splide--nav
    > .splide__slider
    > .splide__track
    > .splide__list
    > .splide__slide:focus,
  .splide--nav > .splide__track > .splide__list > .splide__slide:focus {
    outline: none;
  }
  .splide__arrow {
    background: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
  .splide__arrow svg {
    fill: #00bfff;
    height: 2.5em;
    transition: fill 0.2s linear;
    width: 2.5em;
  }
  .splide__arrow:hover svg {
    fill: #66d9ff;
  }
  .splide__arrow:focus {
    outline: none;
  }
  .splide__arrow--prev {
    left: 1em;
  }
  .splide__arrow--prev svg {
    transform: scaleX(-1);
  }
  .splide__arrow--next {
    right: 1em;
  }
  .splide__pagination {
    bottom: 0.5em;
    left: 0;
    padding: 0 1em;
    position: absolute;
    right: 0;
    z-index: 1;
  }
  .splide__pagination__page {
    background: #ccc;
    border: 0;
    border-radius: 50%;
    display: inline-block;
    height: 10px;
    margin: 3px;
    padding: 0;
    transition: all 0.2s linear;
    width: 10px;
  }
  .splide__pagination__page.is-active {
    background: #00bfff;
    transform: scale(1.4);
  }
  .splide__pagination__page:hover {
    background: #66d9ff;
    cursor: pointer;
    opacity: 0.9;
  }
  .splide__pagination__page:focus {
    outline: none;
  }
  .splide__container {
    box-sizing: border-box;
    position: relative;
  }
  .splide__list {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
    transform-style: preserve-3d;
  }
  .splide.is-initialized:not(.is-active) .splide__list {
    display: block;
  }
  .splide__pagination {
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0;
    pointer-events: none;
  }
  .splide__pagination li {
    display: inline-block;
    line-height: 1;
    list-style-type: none;
    margin: 0;
    pointer-events: auto;
  }
  .splide__progress__bar {
    width: 0;
  }
  .splide {
    outline: none;
    position: relative;
    visibility: hidden;
  }
  .splide.is-initialized,
  .splide.is-rendered {
    visibility: visible;
  }
  .splide__slide {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    list-style-type: none !important;
    margin: 0;
    outline: none;
    position: relative;
  }
  .splide__slide img {
    vertical-align: bottom;
  }
  .splide__slider {
    position: relative;
  }
  .splide__spinner {
    animation: splide-loading 1s linear infinite;
    border: 2px solid #00bfff;
    border-left-color: transparent;
    border-radius: 50%;
    bottom: 0;
    contain: strict;
    display: inline-block;
    height: 20px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
  }
  .splide__track {
    overflow: hidden;
    position: relative;
    z-index: 0;
  }
  @keyframes splide-loading {
    0% {
      transform: rotate(0);
    }
    to {
      transform: rotate(1turn);
    }
  }
  .splide--draggable > .splide__slider > .splide__track,
  .splide--draggable > .splide__track {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .splide--fade > .splide__slider > .splide__track > .splide__list,
  .splide--fade > .splide__track > .splide__list {
    display: block;
  }
  .splide--fade
    > .splide__slider
    > .splide__track
    > .splide__list
    > .splide__slide,
  .splide--fade > .splide__track > .splide__list > .splide__slide {
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    z-index: 0;
  }
  .splide--fade
    > .splide__slider
    > .splide__track
    > .splide__list
    > .splide__slide.is-active,
  .splide--fade > .splide__track > .splide__list > .splide__slide.is-active {
    opacity: 1;
    position: relative;
    z-index: 1;
  }
  .splide--rtl {
    direction: rtl;
  }
  .splide--ttb.is-active > .splide__slider > .splide__track > .splide__list,
  .splide--ttb.is-active > .splide__track > .splide__list {
    display: block;
  }
  .splide__progress__bar {
    background: #ccc;
    height: 3px;
  }
  .splide--rtl > .splide__arrows .splide__arrow--prev,
  .splide--rtl
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--prev,
  .splide--rtl > .splide__track > .splide__arrows .splide__arrow--prev {
    left: auto;
    right: 1em;
  }
  .splide--rtl > .splide__arrows .splide__arrow--prev svg,
  .splide--rtl
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--prev
    svg,
  .splide--rtl > .splide__track > .splide__arrows .splide__arrow--prev svg {
    transform: scaleX(1);
  }
  .splide--rtl > .splide__arrows .splide__arrow--next,
  .splide--rtl
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--next,
  .splide--rtl > .splide__track > .splide__arrows .splide__arrow--next {
    left: 1em;
    right: auto;
  }
  .splide--rtl > .splide__arrows .splide__arrow--next svg,
  .splide--rtl
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--next
    svg,
  .splide--rtl > .splide__track > .splide__arrows .splide__arrow--next svg {
    transform: scaleX(-1);
  }
  .splide--ttb > .splide__arrows .splide__arrow,
  .splide--ttb
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow,
  .splide--ttb > .splide__track > .splide__arrows .splide__arrow {
    left: 50%;
    transform: translate(-50%);
  }
  .splide--ttb > .splide__arrows .splide__arrow--prev,
  .splide--ttb
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--prev,
  .splide--ttb > .splide__track > .splide__arrows .splide__arrow--prev {
    top: 1em;
  }
  .splide--ttb > .splide__arrows .splide__arrow--prev svg,
  .splide--ttb
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--prev
    svg,
  .splide--ttb > .splide__track > .splide__arrows .splide__arrow--prev svg {
    transform: rotate(-90deg);
  }
  .splide--ttb > .splide__arrows .splide__arrow--next,
  .splide--ttb
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--next,
  .splide--ttb > .splide__track > .splide__arrows .splide__arrow--next {
    bottom: 1em;
    top: auto;
  }
  .splide--ttb > .splide__arrows .splide__arrow--next svg,
  .splide--ttb
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--next
    svg,
  .splide--ttb > .splide__track > .splide__arrows .splide__arrow--next svg {
    transform: rotate(90deg);
  }
  .splide--ttb > .splide__pagination,
  .splide--ttb > .splide__slider > .splide__pagination {
    bottom: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    left: auto;
    padding: 1em 0;
    right: 0.5em;
    top: 0;
  }
`;

export const seablueStyle = css`
  .splide--nav
    > .splide__slider
    > .splide__track
    > .splide__list
    > .splide__slide,
  .splide--nav > .splide__track > .splide__list > .splide__slide {
    border: 3px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.7;
  }
  .splide--nav
    > .splide__slider
    > .splide__track
    > .splide__list
    > .splide__slide.is-active,
  .splide--nav > .splide__track > .splide__list > .splide__slide.is-active {
    border: 3px solid #20b2aa;
    opacity: 1;
  }
  .splide--nav
    > .splide__slider
    > .splide__track
    > .splide__list
    > .splide__slide:focus,
  .splide--nav > .splide__track > .splide__list > .splide__slide:focus {
    outline: none;
  }
  .splide--ttb > .splide__arrows .splide__arrow,
  .splide--ttb
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow,
  .splide--ttb > .splide__track > .splide__arrows .splide__arrow {
    left: 50%;
    transform: translate(-50%);
  }
  .splide--ttb > .splide__arrows .splide__arrow--prev,
  .splide--ttb
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--prev,
  .splide--ttb > .splide__track > .splide__arrows .splide__arrow--prev {
    top: 1em;
  }
  .splide--ttb > .splide__arrows .splide__arrow--prev svg,
  .splide--ttb
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--prev
    svg,
  .splide--ttb > .splide__track > .splide__arrows .splide__arrow--prev svg {
    transform: rotate(-90deg);
  }
  .splide--ttb > .splide__arrows .splide__arrow--next,
  .splide--ttb
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--next,
  .splide--ttb > .splide__track > .splide__arrows .splide__arrow--next {
    bottom: 1em;
    top: auto;
  }
  .splide--ttb > .splide__arrows .splide__arrow--next svg,
  .splide--ttb
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--next
    svg,
  .splide--ttb > .splide__track > .splide__arrows .splide__arrow--next svg {
    transform: rotate(90deg);
  }
  .splide--ttb > .splide__pagination,
  .splide--ttb > .splide__slider > .splide__pagination {
    bottom: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    left: auto;
    padding: 1em 0;
    right: 1em;
    top: 0;
  }
  .splide--ttb > .splide__pagination .splide__pagination__page,
  .splide--ttb
    > .splide__slider
    > .splide__pagination
    .splide__pagination__page {
    height: 20px;
    width: 5px;
  }
  .splide__arrow {
    background: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
  .splide__arrow svg {
    fill: #20b2aa;
    height: 2.5em;
    transition: fill 0.2s linear;
    width: 2.5em;
  }
  .splide__arrow:hover svg {
    fill: #57e1d9;
  }
  .splide__arrow:focus {
    outline: none;
  }
  .splide__arrow--prev {
    left: 1em;
  }
  .splide__arrow--prev svg {
    transform: scaleX(-1);
  }
  .splide__arrow--next {
    right: 1em;
  }
  .splide__pagination {
    bottom: 1em;
    left: 0;
    padding: 0 1em;
    position: absolute;
    right: 0;
    z-index: 1;
  }
  .splide__pagination__page {
    background: #ccc;
    border: 0;
    border-radius: 2.5px;
    display: inline-block;
    height: 5px;
    margin: 3px;
    padding: 0;
    transition: all 0.2s linear;
    width: 20px;
  }
  .splide__pagination__page.is-active {
    background: #20b2aa;
  }
  .splide__pagination__page:hover {
    background: #57e1d9;
    cursor: pointer;
    opacity: 0.9;
  }
  .splide__pagination__page:focus {
    outline: none;
  }
  .splide__slide {
    border-radius: 4px;
  }
  .splide__container {
    box-sizing: border-box;
    position: relative;
  }
  .splide__list {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
    transform-style: preserve-3d;
  }
  .splide.is-initialized:not(.is-active) .splide__list {
    display: block;
  }
  .splide__pagination {
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0;
    pointer-events: none;
  }
  .splide__pagination li {
    display: inline-block;
    line-height: 1;
    list-style-type: none;
    margin: 0;
    pointer-events: auto;
  }
  .splide__progress__bar {
    width: 0;
  }
  .splide {
    outline: none;
    position: relative;
    visibility: hidden;
  }
  .splide.is-initialized,
  .splide.is-rendered {
    visibility: visible;
  }
  .splide__slide {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    list-style-type: none !important;
    margin: 0;
    outline: none;
    position: relative;
  }
  .splide__slide img {
    vertical-align: bottom;
  }
  .splide__slider {
    position: relative;
  }
  .splide__spinner {
    animation: splide-loading 1s linear infinite;
    border: 2px solid #20b2aa;
    border-left-color: transparent;
    border-radius: 50%;
    bottom: 0;
    contain: strict;
    display: inline-block;
    height: 20px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
  }
  .splide__track {
    overflow: hidden;
    position: relative;
    z-index: 0;
  }
  @keyframes splide-loading {
    0% {
      transform: rotate(0);
    }
    to {
      transform: rotate(1turn);
    }
  }
  .splide--draggable > .splide__slider > .splide__track,
  .splide--draggable > .splide__track {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .splide--fade > .splide__slider > .splide__track > .splide__list,
  .splide--fade > .splide__track > .splide__list {
    display: block;
  }
  .splide--fade
    > .splide__slider
    > .splide__track
    > .splide__list
    > .splide__slide,
  .splide--fade > .splide__track > .splide__list > .splide__slide {
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    z-index: 0;
  }
  .splide--fade
    > .splide__slider
    > .splide__track
    > .splide__list
    > .splide__slide.is-active,
  .splide--fade > .splide__track > .splide__list > .splide__slide.is-active {
    opacity: 1;
    position: relative;
    z-index: 1;
  }
  .splide--rtl {
    direction: rtl;
  }
  .splide--ttb.is-active > .splide__slider > .splide__track > .splide__list,
  .splide--ttb.is-active > .splide__track > .splide__list {
    display: block;
  }
  .splide__progress__bar {
    background: #ccc;
    height: 3px;
  }
  .splide--rtl > .splide__arrows .splide__arrow--prev,
  .splide--rtl
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--prev,
  .splide--rtl > .splide__track > .splide__arrows .splide__arrow--prev {
    left: auto;
    right: 1em;
  }
  .splide--rtl > .splide__arrows .splide__arrow--prev svg,
  .splide--rtl
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--prev
    svg,
  .splide--rtl > .splide__track > .splide__arrows .splide__arrow--prev svg {
    transform: scaleX(1);
  }
  .splide--rtl > .splide__arrows .splide__arrow--next,
  .splide--rtl
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--next,
  .splide--rtl > .splide__track > .splide__arrows .splide__arrow--next {
    left: 1em;
    right: auto;
  }
  .splide--rtl > .splide__arrows .splide__arrow--next svg,
  .splide--rtl
    > .splide__slider
    > .splide__track
    > .splide__arrows
    .splide__arrow--next
    svg,
  .splide--rtl > .splide__track > .splide__arrows .splide__arrow--next svg {
    transform: scaleX(-1);
  }
  .splide__slider > .splide__arrows .splide__arrow--prev {
    left: -2.5em;
  }
  .splide__slider > .splide__arrows .splide__arrow--next {
    right: -2.5em;
  }
  .splide {
    padding: 3em;
  }
`;

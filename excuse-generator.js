#!/usr/bin/env node

"use strict";

const WHO = ["The dog", "My grandma", "His turtle", "My bird"];
const ACCION = ["ate", "forgot", "lost", "broke"];
const QUE = ["my homework", "the keys", "the car", "my laptop charger"];
const CUANDO = ["ayer", "hoy", "esta tarde", "anoche", "esta manana"];

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function generateExcuse() {
  const randomWho = WHO[Math.floor(Math.random() * WHO.length)];
  const randomAccion = ACCION[Math.floor(Math.random() * ACCION.length)];
  const randomQue = QUE[Math.floor(Math.random() * QUE.length)];
  const randomCuando = CUANDO[Math.floor(Math.random() * CUANDO.length)];

  const EXCUSA = `${randomWho} ${randomAccion} ${randomQue} ${randomCuando}.`;

  return EXCUSA;
}

const excusa = generateExcuse();
console.log(excusa);

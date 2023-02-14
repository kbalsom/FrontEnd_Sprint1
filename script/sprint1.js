"use strict";

const $ = (selector) => document.querySelector(selector);

const resetForm = () => {
  $("form").reset();
};

document.addEventListener("DOMContentLoaded", () => {
  $(".reset_form").addEventListener("click", resetForm);
});

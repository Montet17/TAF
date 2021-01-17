const request = require("supertest")("https://reqres.in/api/");
const expect = require("chai").expect;

module.exports = {
  request,
  expect,
};
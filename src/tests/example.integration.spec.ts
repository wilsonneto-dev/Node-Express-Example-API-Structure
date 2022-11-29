/* eslint-disable import/no-extraneous-dependencies */
import request from "supertest";

import app from "../app";

describe("/accounts [POST]", () => {
  it("shoud create a new account", async () => {
    const response = await request(app).get("/classes").send();
    expect(response.statusCode).toBe(200);
  });
});

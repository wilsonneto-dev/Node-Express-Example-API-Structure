/* eslint-disable import/no-extraneous-dependencies */
import request from "supertest";

import { app, readyPromise } from "../../app";

beforeAll(async () => {
  await readyPromise;
});

describe("/classes [GET]", () => {
  it("shoud list classes", async () => {
    const response = await request(app).get("/classes?studentId=10").send();
    expect(response.statusCode).toBe(200);
  });
});

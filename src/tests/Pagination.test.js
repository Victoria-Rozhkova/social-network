import React from "react";
import TestRenderer from "react-test-renderer";
import { Pagination } from "../components/common/Pagination/Pagination";

describe("Pagination component tests", () => {
  test(`pages count is 15 but should be showed only 10`, () => {
    const testRenderer = TestRenderer.create(
      <Pagination totalPageCount={15} pageSize={1} portionSize={10} />
    );
    const testInstance = testRenderer.root;
    // eslint-disable-next-line testing-library/await-async-query
    const buttons = testInstance.findAllByType("button");
    expect(buttons.length).toBe(10);
  });
});

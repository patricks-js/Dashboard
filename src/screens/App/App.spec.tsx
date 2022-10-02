import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { App } from "."

describe("App", () => {
  it("should print 'Hello World!'", () => {
    const { getByText } = render(<App />)

    expect(getByText("Hello World!")).toBeInTheDocument()
  })
})

import switcher from "./switcher"

it("Switch value from two alternatives", () => {
    expect(switcher('red')('green')('red')).toStrictEqual('green')
})
import {sum} from '../components/sum'

test ("sum function should give sum of two parameters", () => {
    const result = sum(2,3)

    //this is assertion
    expect(result).toBe(5)
})
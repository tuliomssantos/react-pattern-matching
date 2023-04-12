# Pattern Matching

[Pattern Matching](https://stackoverflow.com/questions/2502354/what-is-pattern-matching-in-functional-languages) is a code-branching technique coming from functional programming languages, which lets you scrutinize the structure of values in a declarative way. It has proven itself to be less verbose and more powerful than imperative alternatives (if/else/switch statements), especially when branching on complex data structures or on several values.

Pattern Matching is implemented in Haskell, Rust, Swift, Elixir and many other languages. There is [a tc39 proposal](https://github.com/tc39/proposal-pattern-matching) to add Pattern Matching to the EcmaScript specification, but it is still in stage 1 and isn't likely to land before several years. Luckily, pattern matching can be implemented in userland. `ts-pattern` Provides a typesafe pattern matching implementation that you can start using today.

Read the introduction blog post: [Bringing Pattern Matching to TypeScript 🎨 Introducing TS-Pattern v3.0](https://dev.to/gvergnaud/bringing-pattern-matching-to-typescript-introducing-ts-pattern-v3-0-o1k)

See [ts-pattern documentation](https://github.com/gvergnaud/ts-pattern)


See [ts-pattern with zod](https://codesandbox.io/s/example-ts-pattern-zod-h0z2q)

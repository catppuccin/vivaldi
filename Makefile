.PHONY: all build clean

all: build

build: clean
	deno run --allow-env --allow-read --allow-run --allow-write ./build.ts

clean:
	rm -rf ./dist

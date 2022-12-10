.PHONY: all build clean

all: build

build: clean
	deno run --allow-run --allow-write ./build.ts

clean:
	rm -rf ./dist

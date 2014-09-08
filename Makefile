TESTS = test/*-test.js
REPORTER = spec
TIMEOUT = 10000

BIN_MOCHA = ./node_modules/.bin/mocha
BIN_ISTANBUL = ./node_modules/.bin/istanbul

install:
	@npm install

test:
	@$(BIN_MOCHA) \
    --reporter $(REPORTER) \
    --timeout $(TIMEOUT) \
    $(TESTS)

test-cov:
	@$(BIN_ISTANBUL) cover ./node_modules/.bin/_mocha -- -u exports -R $(REPORTER) -t $(TIMEOUT) \
		$(TESTS)

.PHONY: install test test-cov

var chakram = require('chakram');
expect = chakram.expect;

describe("Test response of web pages", function() {
    it("Should provide HTTP specific assertions (200)", function() {
        var urlToTest = chakram.get("http://httpbin.org/get");
        var test = expect(urlToTest).to.have.status(200);
        return test;
    });
    it("Should provide HTTP specific assertions (400)", function() {
        var urlToTest = chakram.get("http://httpbin.org/get");
        var test = expect(urlToTest).not.to.have.status(400);
        return test;
    });
    it("Should check header information", function() {
        var urlToTest = chakram.get("http://httpbin.org/get?test=chakram");
        var test = expect(urlToTest).to.have.header("content-type", "application/json");
        return test;
    });
    it("Should check to be encoded gzip", function() {
        var urlToTest = chakram.get("http://httpbin.org/get?test=chakram");
        var test = expect(urlToTest).not.to.be.encoded.with.gzip;
        return test;
    });
    it("Contains a data JSON", function() {
        var urlToTest = chakram.get("http://httpbin.org/get?test=chakram");
        var test = expect(urlToTest).to.comprise.of.json({
            "args": { "test": "chakram"}
        });
        return test;
    });
});


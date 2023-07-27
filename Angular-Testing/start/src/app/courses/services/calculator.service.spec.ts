import { CalculatorService } from "./calculator.service";

describe("CalculatorService", () => {
  let calculator: CalculatorService, loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);

    calculator = new CalculatorService(loggerSpy);
  });

  it("should add two numbers", () => {
    const result = calculator.add(2, 2);

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);

    expect(result).toBe(4);
  });

  it("should subtract two numbers", () => {
    const result = calculator.subtract(4, 2);

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    //The second passed argument is a fail output message
    expect(result).toBe(2, "Unexpected substraction result.");
  });
});

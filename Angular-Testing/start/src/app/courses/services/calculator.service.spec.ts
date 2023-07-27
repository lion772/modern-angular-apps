import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
  it("should add two numbers", () => {
    const loggerService = jasmine.createSpyObj("LoggerService", ["log"]);

    const calculator = new CalculatorService(loggerService);

    const result = calculator.add(2, 2);

    expect(loggerService.log).toHaveBeenCalledTimes(1);
    expect(result).toBe(4);
  });

  it("should subtract two numbers", () => {
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.subtract(4, 2);
    //The second passed argument is a fail output message
    expect(result).toBe(2, "Unexpected substraction result.");
  });
});

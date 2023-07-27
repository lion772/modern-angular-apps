import { CalculatorService } from "./calculator.service";
import { TestBed } from "@angular/core/testing";
import { LoggerService } from "./logger.service";

xdescribe("CalculatorService", () => {
  let calculator: CalculatorService, loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);

    //Mock the all the dependencies of the service to test it in isolation,
    //assuming that all other parts of the appplication with which the calculator interacts are working correctly.
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy },
      ],
    });

    calculator = TestBed.inject(CalculatorService);
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

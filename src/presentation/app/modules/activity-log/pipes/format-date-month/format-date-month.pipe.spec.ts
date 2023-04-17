import { FormatDateMonthPipe } from './format-date-month.pipe';

describe('FormatDateMonthPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatDateMonthPipe();
    expect(pipe).toBeTruthy();
  });

  it("test_happy_path_valid_date_format", () => {
    // Arrange
    const pipe = new FormatDateMonthPipe();
    const date = "2022-01-11";

    // Act
    const result = pipe.transform(date);

    // Assert
    expect(result).toEqual("2022-01");
  });

  it("test_happy_path_different_formats", () => {
    // Arrange
    const pipe = new FormatDateMonthPipe();
    const date1 = "2022-01-01";
    const date2 = "01-2022";
    // Act
    const result1 = pipe.transform(date1);
    const result2 = pipe.transform(date2);
    // Assert
    expect(result1).toBe("2022-01");
    expect(result2).toBe("01-2022");
});

});

    // Tests that the pipe transforms a valid date format string into a string with only the year and month.  
    

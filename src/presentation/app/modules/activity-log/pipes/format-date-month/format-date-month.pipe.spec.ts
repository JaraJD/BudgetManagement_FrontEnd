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

});

    // Tests that the pipe transforms a valid date format string into a string with only the year and month.  
    

import { FormatDatePipe } from './format-date.pipe';

describe('FormatDatePipe', () => {

  it('create an instance', () => {
    const pipe = new FormatDatePipe();
    expect(pipe).toBeTruthy();
  });

      // Tests that the pipe returns an empty string when the input date string is an empty string or a string with only whitespace characters.  
      it("test_general_behavior", () => {
        // Arrange
        const pipe = new FormatDatePipe();
        const input1 = '';
        const input2 = ' ';

        // Act
        const output1 = pipe.transform(input1);
        const output2 = pipe.transform(input2);

        // Assert
        expect(output1).toEqual('');
        expect(output2).toEqual(' ');
    });

        // Tests that the output string has a length of 10.  
        it("test_important", () => {
          // Arrange
          const pipe = new FormatDatePipe();
          const input = '2022-01-01T00:00:00.000Z';
  
          // Act
          const output = pipe.transform(input);
  
          // Assert
          expect(output.length).toEqual(10);
      });
});

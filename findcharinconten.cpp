#include <fstream>
#include <iostream>
#include <string>

int main() {
  // Specify the file name
  const std::string filename = "your_file.txt";

  // Open the file for reading
  std::ifstream infile(filename);

  // Check if the file was opened successfully
  if (!infile.is_open()) {
    std::cerr << "Error opening file: " << filename << std::endl;
    return 1;
  }

  // Variable to store the count of commas
  int comma_count = 0;

  // String to store the entire file content
  std::string content;

  // Read the entire file into the content string
  infile.seekg(0, std::ios::end); // Move to the end
  content.reserve(infile.tellg()); // Reserve memory for the file size
  infile.seekg(0, std::ios::beg); // Move back to the beginning
  std::getline(infile, content, '\0'); // Read until null terminator

  // Close the file
  infile.close();

  // Loop through each character in the content string
  for (char c : content) {
    // Check if the character is a comma
    if (c == ',') {
      comma_count++;
    }
  }

  // Print the total number of commas found
  std::cout << "Number of commas in " << filename << ": " << comma_count << std::endl;

  return 0;
}

from openai import OpenAI
import openpyxl
import json
import os

# Configuration
EXCEL_FILE = 'keywords.xlsx'
INDEX_FILE = 'index.txt'
TEMPLATE_FILE = 'template.md'
OUTPUT_DIR = './articles/'
OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')

# Initialize OpenAI
client = OpenAI(
    api_key=OPENAI_API_KEY,
)

def read_current_index():
    try:
        with open(INDEX_FILE, 'r') as file:
            return int(file.read().strip())
    except FileNotFoundError:
        return 0

def increment_index(current_index):
    with open(INDEX_FILE, 'w') as file:
        file.write(str(current_index + 1))

def get_keyword(excel_file, index):
    workbook = openpyxl.load_workbook(excel_file)
    sheet = workbook.active
    # Assuming the keywords are in the first column
    return sheet.cell(row=index + 1, column=1).value

def generate_article(keyword, template):
    # Adjust the prompt to fit your template's requirements.
    prompt = f"I will give you a {template} article in markdown, and a {keyword}. I want you to write a blog article, in French, about {keyword} in the form of the {template}."

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ]
    )
    return response.choices[0].message.content

def save_article(article, index):
    # Ensure the output directory exists
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
    filename = f"{OUTPUT_DIR}{index}.md"
    with open(filename, 'w') as file:
        file.write(article)

def main():
    current_index = read_current_index()
    keyword = get_keyword(EXCEL_FILE, current_index)
    if not keyword:
        print("Reached the end of the keyword list or encountered an error.")
        return
    
    # Load the template
    with open(TEMPLATE_FILE, 'r') as file:
        template = file.read()

    article = generate_article(keyword, template)
    save_article(article, current_index)
    increment_index(current_index)
    print(f"Article for '{keyword}' saved.")

if __name__ == "__main__":
    main()

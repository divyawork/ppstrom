# app.py
import streamlit as st

def main():
    st.title("Simple Streamlit App")
    st.write("This is a basic Streamlit app.")

    # Add more Streamlit components and functionality as needed
    user_input = st.text_input("Enter some text:")
    st.write("You entered:", user_input)

if __name__ == "__main__":
    main()

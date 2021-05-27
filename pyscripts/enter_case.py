import pickle

def classify_utterance(utt):
    # load the vectorizer
    loaded_vectorizer = pickle.load(open('vectorizer1.pickle', 'rb'))

    # load the model
    loaded_model = pickle.load(open('classification1.model', 'rb'))

    # make a prediction
    return(loaded_model.predict(loaded_vectorizer.transform([utt])))

     
def enter_text():
    case_content = input("Enter the case content ")
    result = classify_utterance(case_content)
    return 

if __name__ == "__main__":
    enter_text()

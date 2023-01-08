import csv


class InitDB:

    def __init__(self, file1, file2):
        self.entriesnodu_dic = self.get_entry(file1)
        self.examples_dic = self.get_examples(file2)

    @staticmethod
    def get_entry(filename):
        data = {}
        with open(filename, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                key = row['Entry']
                value = row['MelingoId']
                data[key] = value
        return data

    @staticmethod
    def get_examples(filename):
        data = {}
        with open(filename, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                key = row['MelingoID']
                if key in data:
                    value.append(row)
                else:
                    value = [row]
                data[key] = value
        return data

    def get_list(self, entry):
        try:
            melingo_id = self.entriesnodu_dic[entry]
            examples = self.examples_dic[melingo_id]
            examples_list = []
            for example in examples:
                examples_list.append(example['Text'])
            return examples_list

        except KeyError as e:
            # Handle the exception here
            print(f"KeyError occurred: {e}")
        except Exception as e:
            # Catch any other exceptions here
            print(f"An exception occurred: {e}")

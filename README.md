# fio-autocomplete

## Install
```
npm install fio-autocomplete
```

## Usage
In the component where you want to use it:
```
import fioautocomplete from "fio-autocomplete";
```
If you want to use the css provided you have to add the following under the import:
```
import 'fio-autocomplete/dist/fio-autocomplete.css';
```

### Props/attributes
```
<fioautocomplete :label="label" v-on:sync="valueChanged" :dataitems="itemsData"/>
```

1. label is a string value of an optional text you want as the label in the input
2. sync is the function where you fetch the new data based on a value parsed from this function
3. dataitems is an array of objects looking like:

```
{'header': 'Girls name'},
{'text': 'Amelia', 'value': 'here is a value'},
{'text': 'Alexa', 'value': 'here is a value'},
{'text': 'Ariana', 'value': 'here is a value'},
{'text': 'Annabelle', 'value': 'here is a value'},
{'text': 'Alexandra', 'value': 'here is a value'},
{'header': 'Boys name'},
{'text': 'Antonio', 'value': 'here is a value'},
{'text': 'Andrew', 'value': 'here is a value'},
{'text': 'Alexander', 'value': 'here is a value'},
```

It's optional if you want to parse some headers.

## Example


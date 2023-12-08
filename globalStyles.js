import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF', // Updated background color
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#0088CC', // Updated text color
    marginBottom: 10,
    textAlign: 'center',
  },
  texto: {
    textAlign: 'justify',
    fontSize: 15,
    color: '#FFFFFF', // Updated text color
    opacity: 1,
  },
  viewInput: {
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: '#0088CC', // Updated border color
    borderRadius: 15,
    alignItems: 'center',
    width: '70%', // Adjusted width to be responsive
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  textoSimples: {
    color: '#0088CC', // Updated text color
    fontSize: 15,
    paddingTop: 15,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: '#0088CC', // Updated text color
    fontWeight: 'bold',
  },
  botao: {
    width: '50%',
    backgroundColor: '#0088CC', // Updated background color
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  botao2: {
    width: '50%',
    backgroundColor: '#FF69B4', // Updated background color
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  mulher: {
    color: '#FF69B4', // Updated text color
    paddingLeft: 4,
    fontWeight: 'bold',
  },
  homem: {
    color: '#0088CC', // Updated text color
    paddingRight: 4,
    fontWeight: 'bold',
  },
});

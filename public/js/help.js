$(document).ready(function(){
  $('textarea#help').on('input', function(){
    const text = $(this).val().trim().toUpperCase().replace(/ /g, '')
    if (!text){
      $('#output').empty()
    }
    const codons = text.match(/.../g)
    if (!codons) return
    const output = codons.map(codon => {
      const acid = CODON_TO_ACID[codon]
      if (!acid){
        return ''
      }
      return ACID_TO_LETTER[acid] || ''
    }).join('')
    $('#output').text(output)
  })

  $('textarea#remove').on('input', function(){
    const text = $(this).val().trim().toUpperCase().replace('\s\'!\.-BJXZ', '')
    if (!text){
      $('#output-remove').empty()
    }
    const output = text.split('').map(letter => {
      if (['B', 'J', 'X', 'Z'].includes(letter)){
        return ''
      }
      const acid = LETTER_TO_ACID[letter]
      if (!acid) return ''
      const codons = ACID_TO_CODONS[acid]
      return codons[Math.floor(Math.random() * codons.length)]
    }).join('')
    $('#output-remove').text(output)
  })
});

const CODON_TO_ACID = {
  AAA: 'Lysine',
  AAU: 'Asparagine',
  AAC: 'Asparagine',
  AAG: 'Lysine',
  AUA: 'Isoleucine',
  AUU: 'Isoleucine',
  AUC: 'Isoleucine',
  AUG: 'Methionine',
  ACA: 'Threonine',
  ACU: 'Threonine',
  ACC: 'Threonine',
  ACG: 'Threonine',
  AGA: 'Arginine',
  AGU: 'Serine',
  AGC: 'Serine',
  AGG: 'Arginine',
  UAA: 'Stop',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UAG: 'Pyrrolysine',
  UUA: 'Leucine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUG: 'Leucine',
  UCA: 'Serine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCG: 'Serine',
  UGA: 'Selenocysteine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  CAA: 'Glutamine',
  CAU: 'Histidine',
  CAC: 'Histidine',
  CAG: 'Glutamine',
  CUA: 'Leucine',
  CUU: 'Leucine',
  CUC: 'Leucine',
  CUG: 'Leucine',
  CCA: 'Proline',
  CCU: 'Proline',
  CCC: 'Proline',
  CCG: 'Proline',
  CGA: 'Arginine',
  CGU: 'Arginine',
  CGC: 'Arginine',
  CGG: 'Arginine',
  GAA: 'Glutamic Acid',
  GAU: 'Aspartic Acid',
  GAC: 'Aspartic Acid',
  GAG: 'Glutamic Acid',
  GUA: 'Valine',
  GUU: 'Valine',
  GUC: 'Valine',
  GUG: 'Valine',
  GCA: 'Alanine',
  GCU: 'Alanine',
  GCC: 'Alanine',
  GCG: 'Alanine',
  GGA: 'Glycine',
  GGU: 'Glycine',
  GGC: 'Glycine',
  GGG: 'Glycine',
};

const ACID_TO_LETTER = {
  Alanine: 'A',
  Arginine: 'R',
  Asparagine: 'N',
  'Aspartic Acid': 'D',
  Cysteine: 'C',
  'Glutamic Acid': 'E',
  Glutamine: 'Q',
  Glycine: 'G',
  Histidine: 'H',
  Isoleucine: 'I',
  Leucine: 'L',
  Lysine: 'K',
  Methionine: 'M',
  Phenylalanine: 'F',
  Proline: 'P',
  Serine: 'S',
  Stop: '.',
  Threonine: 'T',
  Tryptophan: 'W',
  Tyrosine: 'Y',
  Valine: 'V',

  Selenocysteine: 'U',
  Pyrrolysine: 'O'
}

const LETTER_TO_ACID = {}
const ACID_TO_CODONS = {}
Object.keys(ACID_TO_LETTER).forEach(acid => {
  LETTER_TO_ACID[ACID_TO_LETTER[acid]] = acid
})
Object.keys(ACID_TO_LETTER).forEach(acid => {
  ACID_TO_CODONS[acid] = []
})
Object.keys(CODON_TO_ACID).forEach(codon => {
  ACID_TO_CODONS[CODON_TO_ACID[codon]].push(codon)
})

function* ngrams(a, n) { 
  let buf = [];

  for (let x of a) {
    buf.push(x);
    if (buf.length === n) {
      yield buf;
      buf.shift();
    }
  }
}

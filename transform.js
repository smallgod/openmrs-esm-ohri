function transformInputString(inputString) {
  const conceptId = '167394';
  const valueCoded = '130364';
  const conceptName = 'persistent_generalized_lymphadenopathy';

  // Replacing the original string with the transformed string
  return inputString.replace(
    /nullif\(max\(if\(o\.concept_id=(\d+) and o\.value_coded =(\d+),'([\w\s]+)'\),''\),''\)/,
    `max(if(o.concept_id=${conceptId} and o.value_coded =${valueCoded}, o.value_coded, null)) as '${conceptName}'`
  );
}

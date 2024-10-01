import './RulesGame.css';

export const createRulesCatching = () => {
  const pRules = document.createElement('p');
  pRules.className = 'rulesCatching';
  pRules.innerText =
    'Recoge los plátanos que van cayendo. Cuantos más plátanos recojas más puntos obtendrás. Cuidado, si el plátano toca el suelo pierdes una vida. Si ves una rama no la recojas: perderás puntos.';
  return pRules;
};

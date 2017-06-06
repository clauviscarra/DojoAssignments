var ninjaConstructor = {
  name: function(name) {
    console.log(`${name} is my name`);
  },
  cohort: function(cohort) {
    console.log(`${cohort} is my cohort`);
  },
  belt_level: 0,
  belt_level_assign: function() {
    if (ninjaConstructor.belt_level == 0) {
      console.log('I have a yellow belt!');
    }
    if (ninjaConstructor.belt_level >= 10) {
      console.log('I have a red belt!');
    }

    if (ninjaConstructor.belt_level >= 100) {
      console.log('I have a green belt!');
    }

  },
  level_up: function() {
    console.log(`I have leveled up!`);
    ninjaConstructor.belt_level += 10;
  }

}
ninjaConstructor.name('Raf');
ninjaConstructor.cohort('Kappa Kappa');
ninjaConstructor.level_up();
ninjaConstructor.level_up();
console.log(ninjaConstructor.belt_level);
ninjaConstructor.belt_level_assign();

const rules = Vars.state.rules;

Events.on(WorldLoadEvent.getClass(), e => {
    rules.dropZoneRadius = 150;
    rules.waveSpacing = 4 * Time.toMinutes;

    rules.buildCostMultiplier = 0.5;
    rules.buildSpeedMultiplier = 2;
    rules.deconstructRefundMultiplier = 1;

    rules.blockHealthMultiplier = 2;
    rules.blockDamageMultiplier = 2;

    rules.unitBuildSpeedMultiplier = 1;

    rules.winWave = Mathf.round(rules.winWave / 2);

    rules.fire = false;
    rules.damageExplosions = false;
    rules.reactorExplosions = false;
});
import React from 'react';
import SPECS from 'common/SPECS';
import SPEC_ANALYSIS_COMPLETENESS from 'common/SPEC_ANALYSIS_COMPLETENESS';

import CombatLogParser from './CombatLogParser';
import CHANGELOG from './CHANGELOG';

export default {
  spec: SPECS.WINDWALKER_MONK,
  maintainer: '@AttilioLH',
  completeness: SPEC_ANALYSIS_COMPLETENESS.NEEDS_MORE_WORK, // When changing this please make a PR with ONLY this value changed, we will do a review of your analysis to find out of it is complete enough.
  changelog: CHANGELOG,
  parser: CombatLogParser,
  footer: (
    <div className="panel fade-in" style={{ margin: '15px auto 30px', maxWidth: 400, textAlign: 'center' }}>
      <div className="panel-body text-muted">
        Based on Guides from <a href="https://www.peakofserenity.com/">Peak of Serenity</a>.<br />
      </div>
    </div>
  ),
};

import React from 'react';
import Darkcontainer from '../footer/dark_back_footer.jsx'
import Whitecontainer from '../footer/white_back_footer.jsx'
import Payment from '../footer/payment_footer.jsx'
function EndFooter() {
  return (
      <div className="shared-ui-footer">
    <Darkcontainer/>
    <Whitecontainer/>
    <Payment/>
    </div>
  )
}

export default EndFooter;

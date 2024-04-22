//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


//////////            EMPLOYER    VERSION 1
//Location

router.post('/phoenix/employer/v1/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "yes") {
            res.redirect('/phoenix/employer/v1/business-size');
    } else {
            res.redirect('/phoenix/employer/v1/not-eligible');
    };
})

//business-size

router.post('/phoenix/employer/v1/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
                    res.redirect('/phoenix/employer/v1/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v1/turnover');
    } else {
            res.redirect('/phoenix/employer/v1/not-eligible');
    };
})


//////////           PROVIDER VERSION 1
//seqosh

router.post('/phoenix/provider/v1/seqohs', function (req, res) {
    const seqohs = req.session.data['seqohs'];
     if (seqohs === "yes") {
                    res.redirect('/phoenix/provider/v1/seqohs-number');
    }if (seqohs === "no") {
                    res.redirect('/phoenix/provider/v1/no-seqohs-content');

    } else {
            res.redirect('/phoenix/provider/v1/no-seqohs-content');
    };
})



//GDPR

router.post('/phoenix/provider/v1/gdpr', function (req, res) {
    const gdpr = req.session.data['gdpr'];
     if (gdpr === "yes") {
                    res.redirect('/phoenix/provider/v1/gdpr-upload');
    }if (gdpr === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})

//CLINICAL

router.post('/phoenix/provider/v1/clinical-gov', function (req, res) {
    const clinical = req.session.data['clinical'];
     if (clinical === "yes") {
                    res.redirect('/phoenix/provider/v1/clinical-upload');
    }if (clinical === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})


//FEEDBACK

router.post('/phoenix/provider/v1/feedback', function (req, res) {
    const feedback = req.session.data['feedback'];
     if (feedback === "yes") {
                    res.redirect('/phoenix/provider/v1/feedback-upload');
    }if (feedback === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})


//REFERRAL

router.post('/phoenix/provider/v1/referral', function (req, res) {
    const referral = req.session.data['referral'];
     if (referral === "yes") {
                    res.redirect('/phoenix/provider/v1/referral-upload');
    }if (referral === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})


//ASSESSMENT

router.post('/phoenix/provider/v1/assessment', function (req, res) {
    const assessment = req.session.data['assessment'];
     if (assessment === "yes") {
                    res.redirect('/phoenix/provider/v1/assessment-upload');
    }if (assessment === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})


//OH REPORT

router.post('/phoenix/provider/v1/oh-report', function (req, res) {
    const ohreport = req.session.data['oh-report'];
     if (ohreport === "yes") {
                    res.redirect('/phoenix/provider/v1/oh-report-upload');
    }if (ohreport === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})


//INPUT

router.post('/phoenix/provider/v1/input', function (req, res) {
    const input = req.session.data['input'];
     if (input === "yes") {
                    res.redirect('/phoenix/provider/v1/name');
    }if (input === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})


//////////            EMPLOYER    VERSION 2
//Location

router.post('/phoenix/employer/v2/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v2/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v2/business-size');
    } else {
            res.redirect('/phoenix/employer/v2/not-eligible');
    };
})

//business-size

router.post('/phoenix/employer/v2/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v2/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v2/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v2/turnover');
    } else {
            res.redirect('/phoenix/employer/v2/not-eligible');
    };
})


//turnover

router.post('/phoenix/employer/v2/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "yes") {
            res.redirect('/phoenix/employer/v2/you-may-be-eligible');

    } else {
            res.redirect('/phoenix/employer/v2/balance-sheet');
    };
})



//balance sheet

router.post('/phoenix/employer/v2/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "yes") {
            res.redirect('/phoenix/employer/v2/you-may-be-eligible');

    } else {
            res.redirect('/phoenix/employer/v2/not-eligible');
    };
})




//////////            EMPLOYER    VERSION 3
//Location

router.post('/phoenix/employer/v3/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v3/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v3/business-size');
    } else {
            res.redirect('/phoenix/employer/v3/not-eligible');
    };
})

//business-size

router.post('/phoenix/employer/v3/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v3/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v3/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v3/turnover');
    } else {
            res.redirect('/phoenix/employer/v3/not-eligible');
    };
})


//turnover

router.post('/phoenix/employer/v3/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "yes") {
            res.redirect('/phoenix/employer/v3/you-may-be-eligible');

    } else {
            res.redirect('/phoenix/employer/v3/balance-sheet');
    };
})



//balance sheet

router.post('/phoenix/employer/v3/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "yes") {
            res.redirect('/phoenix/employer/v3/you-may-be-eligible');

    } else {
            res.redirect('/phoenix/employer/v3/not-eligible');
    };
})


/////////            EMPLOYER    VERSION 3

//it didnt require any routing, as we only redesigned the start page and OH page



//////////            EMPLOYER    VERSION 5
//Location

router.post('/phoenix/employer/v5/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v5/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v5/business-size');
    } else {
            res.redirect('/phoenix/employer/v5/not-eligible-location');
    };
})

//business-size

router.post('/phoenix/employer/v5/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v5/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v5/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v5/turnover');
    } else {
            res.redirect('/phoenix/employer/v5/not-eligible-size');
    };
})


//turnover

router.post('/phoenix/employer/v5/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "no") {
            res.redirect('/phoenix/employer/v5/balance-sheet');

    } else {
            res.redirect('/phoenix/employer/v5/you-may-be-eligible');
    };
})



//balance sheet

router.post('/phoenix/employer/v5/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "no") {
            res.redirect('/phoenix/employer/v5/not-eligible-balance-sheet');
    } else {
            res.redirect('/phoenix/employer/v5/you-may-be-eligible');
    };

})


//////////            EMPLOYER    VERSION 6
//Location

router.post('/phoenix/employer/v6/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v6/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v6/business-size');
    } else {
            res.redirect('/phoenix/employer/v6/not-eligible-location');
    };
})

//business-size

router.post('/phoenix/employer/v6/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v6/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v6/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v6/turnover');
    } else {
            res.redirect('/phoenix/employer/v6/not-eligible-size');
    };
})


//turnover

router.post('/phoenix/employer/v6/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "no") {
            res.redirect('/phoenix/employer/v6/balance-sheet');

    } else {
            res.redirect('/phoenix/employer/v6/you-may-be-eligible');
    };
})



//balance sheet

router.post('/phoenix/employer/v6/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "no") {
            res.redirect('/phoenix/employer/v6/not-eligible-balance-sheet');
    } else {
            res.redirect('/phoenix/employer/v6/you-may-be-eligible');
    };

})


/////////            PROVIDER CODE CHECKER  VERSION 2


router.post('/phoenix/provider/code-checker/v2/code-info', function (req, res) {
    const rightcompany = req.session.data['rightcompany'];
     if (rightcompany === "yes") {
            res.redirect('/phoenix/provider/code-checker/v2/claim-code');
    } else {
            res.redirect('/phoenix/provider/code-checker/v2/code-doesnt-match');
    };

})


/////////            PROVIDER CODE CHECKER  VERSION 3


router.post('/phoenix/provider/code-checker/v3/code-info', function (req, res) {
    const rightcompany = req.session.data['rightcompany'];
     if (rightcompany === "yes") {
            res.redirect('/phoenix/provider/code-checker/v3/claim-code');
    } else {
            res.redirect('/phoenix/provider/code-checker/v3/code-doesnt-match');
    };

})



//////////            EMPLOYER    VERSION 7
//Location

router.post('/phoenix/employer/v7/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v7/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v7/business-size');
    } else {
            res.redirect('/phoenix/employer/v7/not-eligible-location');
    };
})

//business-size

router.post('/phoenix/employer/v7/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v7/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v7/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v7/turnover');
    } else {
            res.redirect('/phoenix/employer/v7/not-eligible-size');
    };
})


//turnover

router.post('/phoenix/employer/v7/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "no") {
            res.redirect('/phoenix/employer/v7/balance-sheet');

    } else {
            res.redirect('/phoenix/employer/v7/you-may-be-eligible');
    };
})



//balance sheet

router.post('/phoenix/employer/v7/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "no") {
            res.redirect('/phoenix/employer/v7/not-eligible-balance-sheet');
    } else {
            res.redirect('/phoenix/employer/v7/you-may-be-eligible');
    };

})


//////////            EMPLOYER    VERSION 8
//Location

router.post('/phoenix/employer/v8/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v8/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v8/business-size');
    } else {
            res.redirect('/phoenix/employer/v8/not-eligible-location');
    };
})

//business-size

router.post('/phoenix/employer/v8/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v8/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v8/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v8/turnover');
    } else {
            res.redirect('/phoenix/employer/v8/not-eligible-size');
    };
})


//turnover

router.post('/phoenix/employer/v8/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "no") {
            res.redirect('/phoenix/employer/v8/balance-sheet');

    } else {
            res.redirect('/phoenix/employer/v8/you-may-be-eligible');
    };
})



//balance sheet

router.post('/phoenix/employer/v8/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "no") {
            res.redirect('/phoenix/employer/v8/not-eligible-balance-sheet');
    } else {
            res.redirect('/phoenix/employer/v8/you-may-be-eligible');
    };

})



//////////            EMPLOYER    VERSION 9
//Location

router.post('/phoenix/employer/v9/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v9/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v9/business-size');
    } else {
            res.redirect('/phoenix/employer/v9/not-eligible-location');
    };
})

//business-size

router.post('/phoenix/employer/v9/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v9/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v9/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v9/turnover');
    } else {
            res.redirect('/phoenix/employer/v9/not-eligible-size');
    };
})


//turnover

router.post('/phoenix/employer/v9/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "no") {
            res.redirect('/phoenix/employer/v9/balance-sheet');

    } else {
            res.redirect('/phoenix/employer/v9/you-may-be-eligible');
    };
})



//balance sheet

router.post('/phoenix/employer/v9/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "no") {
            res.redirect('/phoenix/employer/v9/not-eligible-balance-sheet');
    } else {
            res.redirect('/phoenix/employer/v9/you-may-be-eligible');
    };

})


//////////            EMPLOYER    VERSION 10
//Location

router.post('/phoenix/employer/v10/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v10/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v10/business-size');
    } else {
            res.redirect('/phoenix/employer/v10/not-eligible-location');
    };
})

//business-size

router.post('/phoenix/employer/v10/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v10/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v10/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v10/turnover');
    } else {
            res.redirect('/phoenix/employer/v10/not-eligible-size');
    };
})


//turnover

router.post('/phoenix/employer/v10/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "no") {
            res.redirect('/phoenix/employer/v10/balance-sheet');

    } else {
            res.redirect('/phoenix/employer/v10/you-may-be-eligible');
    };
})



//balance sheet

router.post('/phoenix/employer/v10/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "no") {
            res.redirect('/phoenix/employer/v10/not-eligible-balance-sheet');
    } else {
            res.redirect('/phoenix/employer/v10/you-may-be-eligible');
    };

})

//email address

router.post('/phoenix/employer/v10/email', function (req, res) {
    const email = req.session.data['email'];
     if (email === "yes") {
            res.redirect('/phoenix/employer/v10/email-address');
    } else {
            res.redirect('/phoenix/employer/v10/phone-number');
    };

})

//////////            EMPLOYER    VERSION 11
//Location

router.post('/phoenix/employer/v11/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v11/business-size');
    } else if (register === "wales") {
                  res.redirect('/phoenix/employer/v11/business-size');
    } else {
            res.redirect('/phoenix/employer/v11/not-eligible-location');
    };
})

//business-size

router.post('/phoenix/employer/v11/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v11/turnover');
    } else if (size === "micro") {
            res.redirect('/phoenix/employer/v11/turnover');
    } else  if (size === "medium") {
            res.redirect('/phoenix/employer/v11/turnover');
    } else {
            res.redirect('/phoenix/employer/v11/not-eligible-size');
    };
})


//turnover

router.post('/phoenix/employer/v11/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "no") {
            res.redirect('/phoenix/employer/v11/balance-sheet');

    } else {
            res.redirect('/phoenix/employer/v11/you-may-be-eligible');
    };
})



//balance sheet

router.post('/phoenix/employer/v11/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "no") {
            res.redirect('/phoenix/employer/v11/not-eligible-balance-sheet');
    } else {
            res.redirect('/phoenix/employer/v11/you-may-be-eligible');
    };

})

//email address

router.post('/phoenix/employer/v11/email', function (req, res) {
    const email = req.session.data['email'];
     if (email === "yes") {
            res.redirect('/phoenix/employer/v11/check-answers');
    } else {
            res.redirect('/phoenix/employer/v11/phone-number');
    };

})

//////////            EMPLOYER    VERSION 12 ( private beta)
//Location

router.post('/phoenix/employer/v12/location', function (req, res) {
        const register = req.session.data['register'];
        if (register === "england") {
                res.redirect('/phoenix/employer/v12/business-size');
        } else if (register === "wales") {
                      res.redirect('/phoenix/employer/v12/business-size');
        } else {
                res.redirect('/phoenix/employer/v12/not-eligible-location');
        };
    })
    
    //business-size
    
    router.post('/phoenix/employer/v12/business-size', function (req, res) {
        const size = req.session.data['size'];
         if (size === "small") {
                res.redirect('/phoenix/employer/v12/turnover');
        } else if (size === "micro") {
                res.redirect('/phoenix/employer/v12/turnover');
        } else  if (size === "medium") {
                res.redirect('/phoenix/employer/v12/turnover');
        } else {
                res.redirect('/phoenix/employer/v12/not-eligible-size');
        };
    })
    
    
    //turnover
    
    router.post('/phoenix/employer/v12/turnover', function (req, res) {
        const turnover = req.session.data['turnover'];
         if (turnover === "no") {
                res.redirect('/phoenix/employer/v12/balance-sheet');
    
        } else {
                res.redirect('/phoenix/employer/v12/you-may-be-eligible');
        };
    })
    
    
    
    //balance sheet
    
    router.post('/phoenix/employer/v12/balance-sheet', function (req, res) {
        const balance = req.session.data['balance'];
         if (balance === "no") {
                res.redirect('/phoenix/employer/v12/not-eligible-balance-sheet2');
        } else {
                res.redirect('/phoenix/employer/v12/you-may-be-eligible');
        };
    
    })
    
    //email address
    
    router.post('/phoenix/employer/v12/contact-method', function (req, res) {
        const email = req.session.data['email'];
         if (email === "yes") {
                res.redirect('/phoenix/employer/v12/email');
        } else {
                res.redirect('/phoenix/employer/v12/phone-number');
        };
    
    })
    
//////////            EMPLOYER    VERSION 13 ( private beta)
//Location

router.post('/phoenix/employer/v13/location', function (req, res) {
        const register = req.session.data['register'];
        if (register === "england") {
                res.redirect('/phoenix/employer/v13/business-size');
        } else if (register === "wales") {
                      res.redirect('/phoenix/employer/v13/business-size');
        } else if (register === "ireland") {
                        res.redirect('/phoenix/employer/v13/not-eligible-location-ni');
        } else {
                res.redirect('/phoenix/employer/v13/not-eligible-location');
        };
    })
    
    //business-size
    
    router.post('/phoenix/employer/v13/business-size', function (req, res) {
        const size = req.session.data['size'];
         if (size === "small") {
                res.redirect('/phoenix/employer/v13/turnover');
        } else if (size === "micro") {
                res.redirect('/phoenix/employer/v13/turnover');
        } else  if (size === "medium") {
                res.redirect('/phoenix/employer/v13/turnover');
        } else {
                res.redirect('/phoenix/employer/v13/not-eligible-size');
        };
    })
    
    
    //turnover
    
    router.post('/phoenix/employer/v13/turnover', function (req, res) {
        const turnover = req.session.data['turnover'];
         if (turnover === "no") {
                res.redirect('/phoenix/employer/v13/balance-sheet');
    
        } else {
                res.redirect('/phoenix/employer/v13/you-may-be-eligible');
        };
    })
    
    
    
    //balance sheet
    
    router.post('/phoenix/employer/v13/balance-sheet', function (req, res) {
        const balance = req.session.data['balance'];
         if (balance === "no") {
                res.redirect('/phoenix/employer/v13/not-eligible-balance-sheet2');
        } else {
                res.redirect('/phoenix/employer/v13/you-may-be-eligible');
        };
    
    })
    
    //email address
    
    router.post('/phoenix/employer/v13/contact-method', function (req, res) {
        const email = req.session.data['email'];
         if (email === "yes") {
                res.redirect('/phoenix/employer/v13/email');
        } else {
                res.redirect('/phoenix/employer/v13/phone-number');
        };
    
    })


    
//////////            EMPLOYER    VERSION 13-rct (post-pilot)

//Location

router.post('/phoenix/employer/v13-rct/location', function (req, res) {
        const register = req.session.data['register'];
        if (register === "england") {
                res.redirect('/phoenix/employer/v13-rct/business-size');
       
        } else if (register === "ireland") {
                        res.redirect('/phoenix/employer/v13-rct/not-eligible-location-ni');
        } else {
                res.redirect('/phoenix/employer/v13-rct/not-eligible-location');
        };
    })
    
    //business-size
    
    router.post('/phoenix/employer/v13-rct/business-size', function (req, res) {
        const size = req.session.data['size'];
         if (size === "small") {
                res.redirect('/phoenix/employer/v13-rct/turnover');
        } else if (size === "micro") {
                res.redirect('/phoenix/employer/v13-rct/turnover');
        } else  if (size === "medium") {
                res.redirect('/phoenix/employer/v13-rct/turnover');
        } else {
                res.redirect('/phoenix/employer/v13-rct/not-eligible-size');
        };
    })
    
    
    //turnover
    
    router.post('/phoenix/employer/v13-rct/turnover', function (req, res) {
        const turnover = req.session.data['turnover'];
         if (turnover === "no") {
                res.redirect('/phoenix/employer/v13-rct/balance-sheet');
    
        } else {
                res.redirect('/phoenix/employer/v13-rct/you-may-be-eligible');
        };
    })
    
    
    
    //balance sheet
    
    router.post('/phoenix/employer/v13-rct/balance-sheet', function (req, res) {
        const balance = req.session.data['balance'];
         if (balance === "no") {
                res.redirect('/phoenix/employer/v13-rct/not-eligible-balance-sheet2');
        } else {
                res.redirect('/phoenix/employer/v13-rct/you-may-be-eligible');
        };
    
    })
    
    //email address
    
    router.post('/phoenix/employer/v13-rct/contact-method', function (req, res) {
        const email = req.session.data['email'];
         if (email === "yes") {
                res.redirect('/phoenix/employer/v13-rct/email');
        } else {
                res.redirect('/phoenix/employer/v13-rct/phone-number');
        };
    
    })


//////////            EMPLOYER    VERSION 16 (post-pilot)

//Location

router.post('/phoenix/employer/v16/location', function (req, res) {
        const register = req.session.data['register'];
        if (register === "england") {
                res.redirect('/phoenix/employer/v16/business-size');
       
        } else if (register === "ireland") {
                        res.redirect('/phoenix/employer/v16/not-eligible-location-ni');
        } else {
                res.redirect('/phoenix/employer/v16/not-eligible-location');
        };
    })
    
    //business-size
    
    router.post('/phoenix/employer/v16/business-size', function (req, res) {
        const size = req.session.data['size'];
         if (size === "small") {
                res.redirect('/phoenix/employer/v16/turnover');
        } else if (size === "micro") {
                res.redirect('/phoenix/employer/v16/turnover');
        } else  if (size === "medium") {
                res.redirect('/phoenix/employer/v16/turnover');
        } else {
                res.redirect('/phoenix/employer/v16/not-eligible-size');
        };
    })
    
    
    //turnover
    
    router.post('/phoenix/employer/v16/turnover', function (req, res) {
        const turnover = req.session.data['turnover'];
         if (turnover === "no") {
                res.redirect('/phoenix/employer/v16/balance-sheet');
    
        } else {
                res.redirect('/phoenix/employer/v16/you-may-be-eligible');
        };
    })
    
    
    
    //balance sheet
    
    router.post('/phoenix/employer/v16/balance-sheet', function (req, res) {
        const balance = req.session.data['balance'];
         if (balance === "no") {
                res.redirect('/phoenix/employer/v16/not-eligible-balance-sheet2');
        } else {
                res.redirect('/phoenix/employer/v16/you-may-be-eligible');
        };
    
    })
    
    //email address
    
    router.post('/phoenix/employer/v16/contact-method', function (req, res) {
        const email = req.session.data['email'];
         if (email === "yes") {
                res.redirect('/phoenix/employer/v16/email');
        } else {
                res.redirect('/phoenix/employer/v16/phone-number');
        };
    
    })


//////////            EMPLOYER    VERSION 17 (post-pilot)

//Location

router.post('/phoenix/employer/v17/location', function (req, res) {
        const register = req.session.data['register'];
        if (register === "England and Wales") {
                res.redirect('/phoenix/employer/v17/business-size');
       
        } else if (register === "Northern Ireland") {
                        res.redirect('/phoenix/employer/v17/not-eligible-location-ni');
        } else {
                res.redirect('/phoenix/employer/v17/not-eligible-location');
        };
    })
    
    //business-size
    
    router.post('/phoenix/employer/v17/business-size', function (req, res) {
        const size = req.session.data['size'];
         if (size === "small") {
                res.redirect('/phoenix/employer/v17/turnover');
        } else if (size === "micro") {
                res.redirect('/phoenix/employer/v17/turnover');
        } else  if (size === "medium") {
                res.redirect('/phoenix/employer/v17/turnover-medium');
        } else {
                res.redirect('/phoenix/employer/v17/not-eligible-size');
        };
    })
    
    
    //turnover
    
    router.post('/phoenix/employer/v17/turnover', function (req, res) {

        // Make a variable and give it the value from 'how-many-balls'
        var turnover = req.session.data['turnover']

        // Check whether the variable matches a condition
        if (turnover == "turnover-eligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v17/you-may-be-eligible')
        }
        if (turnover == "turnover-ineligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v17/balance-sheet')
        }
        // else {
        // // Send user to ineligible page
        // res.redirect('basic-employee-contributions')
        // }

        })

        //turnover-medium
    

    router.post('/phoenix/employer/v17/turnover-medium', function (req, res) {

        // Make a variable and give it the value from 'how-many-balls'
        var turnover = req.session.data['turnover']

        // Check whether the variable matches a condition
        if (turnover == "turnover-eligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v17/you-may-be-eligible')
        }
        if (turnover == "turnover-ineligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v17/balance-sheet-medium')
        }
        // else {
        // // Send user to ineligible page
        // res.redirect('basic-employee-contributions')
        // }

        })
    
    
    
    //balance sheet
    

    router.post('/phoenix/employer/v17/balance-sheet', function (req, res) {

        // Make a variable and give it the value from 'how-many-balls'
        var balance = req.session.data['balance']

        // Check whether the variable matches a condition
        if (balance == "balance-eligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v17/you-may-be-eligible')
        }
        if (balance == "balance-ineligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v17/not-eligible-balance-sheet')
        }
        // else {
        // // Send user to ineligible page
        // res.redirect('basic-employee-contributions')
        // }

        })

        //balance-sheet-medium

        router.post('/phoenix/employer/v17/balance-sheet-medium', function (req, res) {

                // Make a variable and give it the value from 'how-many-balls'
                var balance = req.session.data['balance']

                // Check whether the variable matches a condition
                if (balance == "balance-eligible") {
                // Send user to next page
                res.redirect('/phoenix/employer/v17/you-may-be-eligible')
                }
                if (balance == "balance-ineligible") {
                // Send user to next page
                res.redirect('/phoenix/employer/v17/not-eligible-balance-sheet2')
                }
                // else {
                // // Send user to ineligible page
                // res.redirect('basic-employee-contributions')
                // }

                })
    
    //email address
    
    router.post('/phoenix/employer/v17/contact-method', function (req, res) {
        const email = req.session.data['email'];
         if (email === "yes") {
                res.redirect('/phoenix/employer/v17/email');
        } else {
                res.redirect('/phoenix/employer/v17/phone-number');
        };
    
    })


     //main contact
    
     router.post('/phoenix/employer/v17/contact', function (req, res) {
        const mainName = req.session.data['mainName'];
         if (mainName === "yes") {
                res.redirect('/phoenix/employer/v17/employer-name');
        } else {
                res.redirect('/phoenix/employer/v17/contact-main-details');
        };
    
    })


//////////            EMPLOYER VERSION 19-gds-a-r (GDS Alpha Reassessment)

//Location

router.post('/phoenix/employer/v19-gds-a-r/location', function (req, res) {
        const register = req.session.data['register'];
        if (register === "england") {
                res.redirect('/phoenix/employer/v19-gds-a-r/business-size');
        } else if (register === "wales") {
                      res.redirect('/phoenix/employer/v19-gds-a-r/business-size');
        } else if (register === "ireland") {
                        res.redirect('/phoenix/employer/v19-gds-a-r/not-eligible-location-ni');
        } else {
                res.redirect('/phoenix/employer/v19-gds-a-r/not-eligible-location');
        };
    })
    
    //business-size
    
    router.post('/phoenix/employer/v19-gds-a-r/business-size', function (req, res) {
        const size = req.session.data['size'];
         if (size === "small") {
                res.redirect('/phoenix/employer/v19-gds-a-r/turnover');
        } else if (size === "micro") {
                res.redirect('/phoenix/employer/v19-gds-a-r/turnover');
        } else  if (size === "medium") {
                res.redirect('/phoenix/employer/v19-gds-a-r/turnover-medium');
        } else {
                res.redirect('/phoenix/employer/v19-gds-a-r/not-eligible-size');
        };
    })
    
    
    //turnover
    

    router.post('/phoenix/employer/v19-gds-a-r/turnover', function (req, res) {

        // Make a variable and give it the value from 'how-many-balls'
        var turnover = req.session.data['turnover']

        // Check whether the variable matches a condition
        if (turnover == "turnover-eligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v19-gds-a-r/you-may-be-eligible')
        }
        if (turnover == "turnover-ineligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v19-gds-a-r/balance-sheet')
        }
        // else {
        // // Send user to ineligible page
        // res.redirect('basic-employee-contributions')
        // }

        })


        //turnover-medium
    

    router.post('/phoenix/employer/v19-gds-a-r/turnover-medium', function (req, res) {

        // Make a variable and give it the value from 'how-many-balls'
        var turnover = req.session.data['turnover']

        // Check whether the variable matches a condition
        if (turnover == "turnover-eligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v19-gds-a-r/you-may-be-eligible')
        }
        if (turnover == "turnover-ineligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v19-gds-a-r/balance-sheet-medium')
        }
        // else {
        // // Send user to ineligible page
        // res.redirect('basic-employee-contributions')
        // }

        })
    
    
    
    //balance sheet

    router.post('/phoenix/employer/v19-gds-a-r/balance-sheet', function (req, res) {

        // Make a variable and give it the value from 'how-many-balls'
        var balance = req.session.data['balance']

        // Check whether the variable matches a condition
        if (balance == "balance-eligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v19-gds-a-r/you-may-be-eligible')
        }
        if (balance == "balance-ineligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v19-gds-a-r/not-eligible-balance-sheet')
        }
        // else {
        // // Send user to ineligible page
        // res.redirect('basic-employee-contributions')
        // }

        })

        //balance-sheet-medium

        router.post('/phoenix/employer/v19-gds-a-r/balance-sheet-medium', function (req, res) {

                // Make a variable and give it the value from 'how-many-balls'
                var balance = req.session.data['balance']

                // Check whether the variable matches a condition
                if (balance == "balance-eligible") {
                // Send user to next page
                res.redirect('/phoenix/employer/v19-gds-a-r/you-may-be-eligible')
                }
                if (balance == "balance-ineligible") {
                // Send user to next page
                res.redirect('/phoenix/employer/v19-gds-a-r/not-eligible-balance-sheet2')
                }
                // else {
                // // Send user to ineligible page
                // res.redirect('basic-employee-contributions')
                // }

                })
    
    //email address
    
    router.post('/phoenix/employer/v19-gds-a-r/contact-method', function (req, res) {
        const email = req.session.data['email'];
         if (email === "yes") {
                res.redirect('/phoenix/employer/v19-gds-a-r/email');
        } else {
                res.redirect('/phoenix/employer/v19-gds-a-r/phone-number');
        };
    
    })


//////////            EMPLOYER VERSION 20 (public beta)

//have you registered before

router.post('/phoenix/employer/v20/have-you-registered', function (req, res) {
        if (req.session.data['haveRegistered'] === "yes") {
        res.redirect('/phoenix/employer/v20/email-address-gate')
        } else {
        res.redirect('/phoenix/employer/v20/are-you-eligible')
        }
    })

//Location

router.post('/phoenix/employer/v20/location', function (req, res) {
        const register = req.session.data['register'];
        if (register === "England and Wales") {
                res.redirect('/phoenix/employer/v20/business-size');
       
        } else if (register === "Northern Ireland") {
                        res.redirect('/phoenix/employer/v20/not-eligible-location-ni');
        } else {
                res.redirect('/phoenix/employer/v20/not-eligible-location');
        };
    })
    
    //business-size
    
    router.post('/phoenix/employer/v20/business-size', function (req, res) {
        const size = req.session.data['size'];
         if (size === "small") {
                res.redirect('/phoenix/employer/v20/turnover');
        } else if (size === "micro") {
                res.redirect('/phoenix/employer/v20/turnover');
        } else  if (size === "medium") {
                res.redirect('/phoenix/employer/v20/turnover-medium');
        } else {
                res.redirect('/phoenix/employer/v20/not-eligible-size');
        };
    })
    
    
    //turnover
    
    router.post('/phoenix/employer/v20/turnover', function (req, res) {

        // Make a variable and give it the value from 'how-many-balls'
        var turnover = req.session.data['turnover']

        // Check whether the variable matches a condition
        if (turnover == "turnover-eligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v20/you-may-be-eligible')
        }
        if (turnover == "turnover-ineligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v20/balance-sheet')
        }
        // else {
        // // Send user to ineligible page
        // res.redirect('basic-employee-contributions')
        // }

        })

        //turnover-medium
    

    router.post('/phoenix/employer/v20/turnover-medium', function (req, res) {

        // Make a variable and give it the value from 'how-many-balls'
        var turnover = req.session.data['turnover']

        // Check whether the variable matches a condition
        if (turnover == "turnover-eligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v20/you-may-be-eligible')
        }
        if (turnover == "turnover-ineligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v20/balance-sheet-medium')
        }
        // else {
        // // Send user to ineligible page
        // res.redirect('basic-employee-contributions')
        // }

        })
    
    
    
    //balance sheet
    

    router.post('/phoenix/employer/v20/balance-sheet', function (req, res) {

        // Make a variable and give it the value from 'how-many-balls'
        var balance = req.session.data['balance']

        // Check whether the variable matches a condition
        if (balance == "balance-eligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v20/you-may-be-eligible')
        }
        if (balance == "balance-ineligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v20/not-eligible-balance-sheet')
        }
        // else {
        // // Send user to ineligible page
        // res.redirect('basic-employee-contributions')
        // }

        })

        //balance-sheet-medium

        router.post('/phoenix/employer/v20/balance-sheet-medium', function (req, res) {

                // Make a variable and give it the value from 'how-many-balls'
                var balance = req.session.data['balance']

                // Check whether the variable matches a condition
                if (balance == "balance-eligible") {
                // Send user to next page
                res.redirect('/phoenix/employer/v20/you-may-be-eligible')
                }
                if (balance == "balance-ineligible") {
                // Send user to next page
                res.redirect('/phoenix/employer/v20/not-eligible-balance-sheet2')
                }
                // else {
                // // Send user to ineligible page
                // res.redirect('basic-employee-contributions')
                // }

                })
    
    //email address
    
    router.post('/phoenix/employer/v20/contact-method', function (req, res) {
        const email = req.session.data['email'];
         if (email === "yes") {
                res.redirect('/phoenix/employer/v20/email');
        } else {
                res.redirect('/phoenix/employer/v20/phone-number');
        };
    
    })


     //main contact
    
     router.post('/phoenix/employer/v20/contact', function (req, res) {
        const mainName = req.session.data['mainName'];
         if (mainName === "yes") {
                res.redirect('/phoenix/employer/v20/employer-name');
        } else {
                res.redirect('/phoenix/employer/v20/contact-main-details');
        };
    
    })
    

    //////////            EMPLOYER    VERSION 14 ( private beta)
//Location

router.post('/phoenix/employer/v14/location', function (req, res) {
        const register = req.session.data['register'];
        if (register === "england") {
                res.redirect('/phoenix/employer/v14/business-size');
        } else if (register === "wales") {
                      res.redirect('/phoenix/employer/v14/business-size');
        } else if (register === "ireland") {
                        res.redirect('/phoenix/employer/v14/not-eligible-location-ni');
        } else {
                res.redirect('/phoenix/employer/v14/not-eligible-location');
        };
    })
    
    //business-size
    
    router.post('/phoenix/employer/v14/business-size', function (req, res) {
        const size = req.session.data['size'];
         if (size === "small") {
                res.redirect('/phoenix/employer/v14/turnover');
        } else if (size === "micro") {
                res.redirect('/phoenix/employer/v14/turnover');
        } else  if (size === "medium") {
                res.redirect('/phoenix/employer/v14/turnover');
        } else {
                res.redirect('/phoenix/employer/v14/not-eligible-size');
        };
    })
    
    
    //turnover
    
    router.post('/phoenix/employer/v14/turnover', function (req, res) {
        const turnover = req.session.data['turnover'];
         if (turnover === "no") {
                res.redirect('/phoenix/employer/v14/balance-sheet');
    
        } else {
                res.redirect('/phoenix/employer/v14/you-may-be-eligible');
        };
    })
    
    
    
    //balance sheet
    
    router.post('/phoenix/employer/v14/balance-sheet', function (req, res) {
        const balance = req.session.data['balance'];
         if (balance === "no") {
                res.redirect('/phoenix/employer/v14/not-eligible-balance-sheet2');
        } else {
                res.redirect('/phoenix/employer/v14/you-may-be-eligible');
        };
    
    })
    
    //email address
    
    router.post('/phoenix/employer/v14/contact-method', function (req, res) {
        const email = req.session.data['email'];
         if (email === "yes") {
                res.redirect('/phoenix/employer/v14/email');
        } else {
                res.redirect('/phoenix/employer/v14/phone-number');
        };
    
    })

 //////////            EMPLOYER    VERSION 15 ( private beta)
//Location

router.post('/phoenix/employer/v15/location', function (req, res) {
        const register = req.session.data['register'];
        if (register === "england") {
                res.redirect('/phoenix/employer/v15/business-size');
        } else if (register === "wales") {
                      res.redirect('/phoenix/employer/v15/business-size');
        } else if (register === "ireland") {
                        res.redirect('/phoenix/employer/v15/not-eligible-location-ni');
        } else {
                res.redirect('/phoenix/employer/v15/not-eligible-location');
        };
    })
    
    //business-size
    
    router.post('/phoenix/employer/v15/business-size', function (req, res) {
        const size = req.session.data['size'];
         if (size === "small") {
                res.redirect('/phoenix/employer/v15/turnover');
        } else if (size === "micro") {
                res.redirect('/phoenix/employer/v15/turnover');
        } else  if (size === "medium") {
                res.redirect('/phoenix/employer/v15/turnover-medium');
        } else {
                res.redirect('/phoenix/employer/v15/not-eligible-size');
        };
    })
    
    
    //turnover
    

    router.post('/phoenix/employer/v15/turnover', function (req, res) {

        // Make a variable and give it the value from 'how-many-balls'
        var turnover = req.session.data['turnover']

        // Check whether the variable matches a condition
        if (turnover == "turnover-eligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v15/you-may-be-eligible')
        }
        if (turnover == "turnover-ineligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v15/balance-sheet')
        }
        // else {
        // // Send user to ineligible page
        // res.redirect('basic-employee-contributions')
        // }

        })


        //turnover-medium
    

    router.post('/phoenix/employer/v15/turnover-medium', function (req, res) {

        // Make a variable and give it the value from 'how-many-balls'
        var turnover = req.session.data['turnover']

        // Check whether the variable matches a condition
        if (turnover == "turnover-eligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v15/you-may-be-eligible')
        }
        if (turnover == "turnover-ineligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v15/balance-sheet-medium')
        }
        // else {
        // // Send user to ineligible page
        // res.redirect('basic-employee-contributions')
        // }

        })
    
    
    
    //balance sheet

    router.post('/phoenix/employer/v15/balance-sheet', function (req, res) {

        // Make a variable and give it the value from 'how-many-balls'
        var balance = req.session.data['balance']

        // Check whether the variable matches a condition
        if (balance == "balance-eligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v15/you-may-be-eligible')
        }
        if (balance == "balance-ineligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v15/not-eligible-balance-sheet')
        }
        // else {
        // // Send user to ineligible page
        // res.redirect('basic-employee-contributions')
        // }

        })

        //balance-sheet-medium

        router.post('/phoenix/employer/v15/balance-sheet-medium', function (req, res) {

                // Make a variable and give it the value from 'how-many-balls'
                var balance = req.session.data['balance']

                // Check whether the variable matches a condition
                if (balance == "balance-eligible") {
                // Send user to next page
                res.redirect('/phoenix/employer/v15/you-may-be-eligible')
                }
                if (balance == "balance-ineligible") {
                // Send user to next page
                res.redirect('/phoenix/employer/v15/not-eligible-balance-sheet2')
                }
                // else {
                // // Send user to ineligible page
                // res.redirect('basic-employee-contributions')
                // }

                })
    
    //email address
    
    router.post('/phoenix/employer/v15/contact-method', function (req, res) {
        const email = req.session.data['email'];
         if (email === "yes") {
                res.redirect('/phoenix/employer/v15/email');
        } else {
                res.redirect('/phoenix/employer/v15/phone-number');
        };
    
    })


////////// EMPLOYER VERSION 18 (pilot / private beta)

//Location

router.post('/phoenix/employer/v18/location', function (req, res) {
        const register = req.session.data['register'];
        if (register === "england") {
                res.redirect('/phoenix/employer/v18/business-size');
        } else if (register === "wales") {
                      res.redirect('/phoenix/employer/v18/business-size');
        } else if (register === "ireland") {
                        res.redirect('/phoenix/employer/v18/not-eligible-location-ni');
        } else {
                res.redirect('/phoenix/employer/v18/not-eligible-location');
        };
    })
    
    //business-size
    
    router.post('/phoenix/employer/v18/business-size', function (req, res) {
        const size = req.session.data['size'];
         if (size === "small") {
                res.redirect('/phoenix/employer/v18/turnover');
        } else if (size === "micro") {
                res.redirect('/phoenix/employer/v18/turnover');
        } else  if (size === "medium") {
                res.redirect('/phoenix/employer/v18/turnover-medium');
        } else {
                res.redirect('/phoenix/employer/v18/not-eligible-size');
        };
    })
    
    
    //turnover
    

    router.post('/phoenix/employer/v18/turnover', function (req, res) {

        // Make a variable and give it the value from 'how-many-balls'
        var turnover = req.session.data['turnover']

        // Check whether the variable matches a condition
        if (turnover == "turnover-eligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v18/you-may-be-eligible')
        }
        if (turnover == "turnover-ineligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v18/balance-sheet')
        }
        // else {
        // // Send user to ineligible page
        // res.redirect('basic-employee-contributions')
        // }

        })


        //turnover-medium
    

    router.post('/phoenix/employer/v18/turnover-medium', function (req, res) {

        // Make a variable and give it the value from 'how-many-balls'
        var turnover = req.session.data['turnover']

        // Check whether the variable matches a condition
        if (turnover == "turnover-eligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v18/you-may-be-eligible')
        }
        if (turnover == "turnover-ineligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v18/balance-sheet-medium')
        }
        // else {
        // // Send user to ineligible page
        // res.redirect('basic-employee-contributions')
        // }

        })
    
    
    
    //balance sheet

    router.post('/phoenix/employer/v18/balance-sheet', function (req, res) {

        // Make a variable and give it the value from 'how-many-balls'
        var balance = req.session.data['balance']

        // Check whether the variable matches a condition
        if (balance == "balance-eligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v18/you-may-be-eligible')
        }
        if (balance == "balance-ineligible") {
        // Send user to next page
        res.redirect('/phoenix/employer/v18/not-eligible-balance-sheet')
        }
        // else {
        // // Send user to ineligible page
        // res.redirect('basic-employee-contributions')
        // }

        })

        //balance-sheet-medium

        router.post('/phoenix/employer/v18/balance-sheet-medium', function (req, res) {

                // Make a variable and give it the value from 'how-many-balls'
                var balance = req.session.data['balance']

                // Check whether the variable matches a condition
                if (balance == "balance-eligible") {
                // Send user to next page
                res.redirect('/phoenix/employer/v18/you-may-be-eligible')
                }
                if (balance == "balance-ineligible") {
                // Send user to next page
                res.redirect('/phoenix/employer/v18/not-eligible-balance-sheet2')
                }
                // else {
                // // Send user to ineligible page
                // res.redirect('basic-employee-contributions')
                // }

                })
    
    //email address
    
    router.post('/phoenix/employer/v18/contact-method', function (req, res) {
        const email = req.session.data['email'];
         if (email === "yes") {
                res.redirect('/phoenix/employer/v18/email');
        } else {
                res.redirect('/phoenix/employer/v18/phone-number');
        };
    
    })

       



//////////            AGENT    VERSION 3
//Add branch

router.post('/phoenix/agent/v4/want-add-branch', function (req, res) {
    const branch = req.session.data['branch'];
    if (branch === "yes") {
            res.redirect('/phoenix/agent/v4/add-new-2');

    } else {
            res.redirect('/phoenix/agent/v4/added-branch');
    };
})

//Publish?

router.post('/phoenix/agent/v4/payment', function (req, res) {
    const publish = req.session.data['publish'];
    if (publish === "yes") {
            res.redirect('/phoenix/agent/v4/added-notification');

    } else {
            res.redirect('/phoenix/agent/v4/added-not-published');
    };
})

//sop

router.post('/phoenix/agent/v4/sop', function (req, res) {
    const sop = req.session.data['sop'];
    if (sop === "yes") {
            res.redirect('/phoenix/agent/v4/payment');

    } else {
            res.redirect('/phoenix/agent/v4/added-not-published');
    };
})


//add new clinic publish

router.post('/phoenix/agent/v4/add-new-clinic-publish', function (req, res) {
    const publish = req.session.data['publish'];
    if (publish === "yes") {
            res.redirect('/phoenix/agent/v4/add-new-clinic-confirmation');

    } else {
            res.redirect('/phoenix/agent/v4/add-new-clinic-notpublished');
    };
})



//////////            AGENT    VERSION 5
//Add branch

router.post('/phoenix/agent/v5/want-add-branch', function (req, res) {
    const branch = req.session.data['branch'];
    if (branch === "yes") {
            res.redirect('/phoenix/agent/v5/add-new-2');

    } else {
            res.redirect('/phoenix/agent/v5/added-branch');
    };
})

//Publish?

router.post('/phoenix/agent/v5/payment', function (req, res) {
    const publish = req.session.data['publish'];
    if (publish === "yes") {
            res.redirect('/phoenix/agent/v5/added-notification');

    } else {
            res.redirect('/phoenix/agent/v5/added-not-published');
    };
})

//sop

router.post('/phoenix/agent/v5/sop', function (req, res) {
    const sop = req.session.data['sop'];
    if (sop === "yes") {
            res.redirect('/phoenix/agent/v5/payment');

    } else {
            res.redirect('/phoenix/agent/v5/added-not-published');
    };
})


//add new clinic publish

router.post('/phoenix/agent/v5/add-new-clinic-publish', function (req, res) {
    const publish = req.session.data['publish'];
    if (publish === "yes") {
            res.redirect('/phoenix/agent/v5/add-new-clinic-confirmation');

    } else {
            res.redirect('/phoenix/agent/v5/add-new-clinic-notpublished');
    };
})


//////////            AGENT    VERSION 6
//Add branch

router.post('/phoenix/agent/v6/want-add-branch', function (req, res) {
    const branch = req.session.data['branch'];
    if (branch === "yes") {
            res.redirect('/phoenix/agent/v6/add-new-2');

    } else {
            res.redirect('/phoenix/agent/v6/added-branch');
    };
})

//Publish?

router.post('/phoenix/agent/v6/payment', function (req, res) {
    const publish = req.session.data['publish'];
    if (publish === "yes") {
            res.redirect('/phoenix/agent/v6/added-notification');

    } else {
            res.redirect('/phoenix/agent/v6/added-not-published');
    };
})

//sop

router.post('/phoenix/agent/v6/sop', function (req, res) {
    const sop = req.session.data['sop'];
    if (sop === "yes") {
            res.redirect('/phoenix/agent/v6/payment');

    } else {
            res.redirect('/phoenix/agent/v6/added-not-published');
    };
})


//add new clinic publish

router.post('/phoenix/agent/v6/add-new-clinic-publish', function (req, res) {
    const publish = req.session.data['publish'];
    if (publish === "yes") {
            res.redirect('/phoenix/agent/v6/add-new-clinic-confirmation');

    } else {
            res.redirect('/phoenix/agent/v6/add-new-clinic-notpublished');
    };
})


//remove (delete) clinic

router.post('/phoenix/agent/v6/delete-clinic-cordell', function (req, res) {
    const removeclinic = req.session.data['removeclinic'];
    if (removeclinic === "yes") {
            res.redirect('/phoenix/agent/v6/delete-clinic-cordell-reason');

    } else {
            res.redirect('/phoenix/agent/v6/clinic-details-cordell');
    };


})

//////////            AGENT    VERSION 7
//Add branch

router.post('/phoenix/agent/v7/want-add-branch', function (req, res) {
        const branch = req.session.data['branch'];
        if (branch === "yes") {
                res.redirect('/phoenix/agent/v7/add-new-2');
    
        } else {
                res.redirect('/phoenix/agent/v7/added-branch');
        };
    })
    
    //Publish?
    
    router.post('/phoenix/agent/v7/payment', function (req, res) {
        const publish = req.session.data['publish'];
        if (publish === "yes") {
                res.redirect('/phoenix/agent/v7/added-notification');
    
        } else {
                res.redirect('/phoenix/agent/v7/added-not-published');
        };
    })
    
    //sop
    
    router.post('/phoenix/agent/v7/sop', function (req, res) {
        const sop = req.session.data['sop'];
        if (sop === "yes") {
                res.redirect('/phoenix/agent/v7/payment');
    
        } else {
                res.redirect('/phoenix/agent/v7/added-not-published');
        };
    })
    
    
    //add new clinic publish
    
    router.post('/phoenix/agent/v7/add-new-clinic-publish', function (req, res) {
        const publish = req.session.data['publish'];
        if (publish === "yes") {
                res.redirect('/phoenix/agent/v7/add-new-clinic-confirmation');
    
        } else {
                res.redirect('/phoenix/agent/v7/add-new-clinic-notpublished');
        };
    })
    
    
    //remove (delete) clinic
    
    router.post('/phoenix/agent/v7/delete-clinic-cordell', function (req, res) {
        const removeclinic = req.session.data['removeclinic'];
        if (removeclinic === "yes") {
                res.redirect('/phoenix/agent/v7/delete-clinic-cordell-reason');
    
        } else {
                res.redirect('/phoenix/agent/v7/clinic-details-cordell');
        };
    
    
    })


    //assessment methods and types routing



    router.post('/phoenix/agent/v7/add-new-2', function (req, res) {
  var assessmentType = req.session.data['assessmentType']

if(assessmentType.includes('mental'))
{
        res.redirect('/phoenix/agent/v7/distance');
}
else if(assessmentType.includes('physical'))
{ 
        res.redirect('/phoenix/agent/v7/distance');
}
else if(assessmentType.includes('homevisit'))
{ 
        res.redirect('/phoenix/agent/v7/distance');
}


else {
        res.redirect('/phoenix/agent/v7/want-add-branch');
}})


//////////            AGENT    VERSION 8
//Add branch

router.post('/phoenix/agent/v8/want-add-branch', function (req, res) {
        const branch = req.session.data['branch'];
        if (branch === "yes") {
                res.redirect('/phoenix/agent/v8/add-new-2');
    
        } else {
                res.redirect('/phoenix/agent/v8/added-branch');
        };
    })
    
    //Publish?
    
    router.post('/phoenix/agent/v8/payment', function (req, res) {
        const publish = req.session.data['publish'];
        if (publish === "yes") {
                res.redirect('/phoenix/agent/v8/added-notification');
    
        } else {
                res.redirect('/phoenix/agent/v8/added-not-published');
        };
    })
    
    //sop
    
    router.post('/phoenix/agent/v8/sop', function (req, res) {
        const sop = req.session.data['sop'];
        if (sop === "yes") {
                res.redirect('/phoenix/agent/v8/payment');
    
        } else {
                res.redirect('/phoenix/agent/v8/added-not-published');
        };
    })
    
    
    //add new clinic publish
    
    router.post('/phoenix/agent/v8/add-new-clinic-publish', function (req, res) {
        const publish = req.session.data['publish'];
        if (publish === "yes") {
                res.redirect('/phoenix/agent/v8/add-new-clinic-confirmation');
    
        } else {
                res.redirect('/phoenix/agent/v8/add-new-clinic-notpublished');
        };
    })
    
    
    //remove (delete) clinic
    
    router.post('/phoenix/agent/v8/delete-clinic-cordell', function (req, res) {
        const removeclinic = req.session.data['removeclinic'];
        if (removeclinic === "yes") {
                res.redirect('/phoenix/agent/v8/delete-clinic-cordell-reason');
    
        } else {
                res.redirect('/phoenix/agent/v8/clinic-details-cordell');
        };
    
    
    })


    //assessment methods and types routing



    router.post('/phoenix/agent/v8/add-new-2', function (req, res) {
  var assessmentType = req.session.data['assessmentType']

if(assessmentType.includes('mental'))
{
        res.redirect('/phoenix/agent/v8/distance');
}
else if(assessmentType.includes('physical'))
{ 
        res.redirect('/phoenix/agent/v8/distance');
}
else if(assessmentType.includes('homevisit'))
{ 
        res.redirect('/phoenix/agent/v8/distance');
}
else if(assessmentType.includes('workplacevisit'))
{ 
        res.redirect('/phoenix/agent/v8/distance');
}


else {
        res.redirect('/phoenix/agent/v8/check-answers-clinic');
}})

//add new clinic routing check provider

router.post('/phoenix/agent/v8/add-new-clinic', function (req, res) {
        var assessmentType = req.session.data['assessmentType']
      
      if(assessmentType.includes('mental'))
      {
              res.redirect('/phoenix/agent/v8/add-new-clinic-distance');
      }
      else if(assessmentType.includes('physical'))
      { 
              res.redirect('/phoenix/agent/v8/add-new-clinic-distance');
      }
      else if(assessmentType.includes('homevisit'))
      { 
              res.redirect('/phoenix/agent/v8/add-new-clinic-distance');
      }
      else if(assessmentType.includes('workplacevisit'))
      { 
              res.redirect('/phoenix/agent/v8/add-new-clinic-distance');
      }
      
      
      else {
              res.redirect('/phoenix/agent/v8/add-clinic-check-answers');
      }})

      //add new clinic routing add-clinic-2

router.post('/phoenix/agent/v8/add-clinic-2', function (req, res) {
        var assessmentType = req.session.data['assessmentType']
      
      if(assessmentType.includes('mental'))
      {
              res.redirect('/phoenix/agent/v8/add-clinic-2-distance');
      }
      else if(assessmentType.includes('physical'))
      { 
              res.redirect('/phoenix/agent/v8/add-clinic-2-distance');
      }
      else if(assessmentType.includes('homevisit'))
      { 
              res.redirect('/phoenix/agent/v8/add-clinic-2-distance');
      }
      else if(assessmentType.includes('workplacevisit'))
      { 
              res.redirect('/phoenix/agent/v8/add-clinic-2-distance');
      }
      
      
      else {
              res.redirect('/phoenix/agent/v8/add-clinic-2-check-clinic');
      }})

      router.post('/phoenix/agent/v8/add-another-clinic-2', function (req, res) {
        const branch = req.session.data['branch'];
        if (branch === "yes") {
                res.redirect('/phoenix/agent/v8/add-clinic-2');
    
        } else {
                res.redirect('/phoenix/agent/v8/added-clinic-2-check-answers');
        };
    })

    //////////            AGENT    VERSION 9
//Add branch

router.post('/phoenix/agent/v9/want-add-branch', function (req, res) {
        const branch = req.session.data['branch'];
        if (branch === "yes") {
                res.redirect('/phoenix/agent/v9/add-new-2');
    
        } else {
                res.redirect('/phoenix/agent/v9/added-branch');
        };
    })
  
    
    
    //add new clinic publish
    
    router.post('/phoenix/agent/v9/add-new-clinic-publish', function (req, res) {
        const publish = req.session.data['publish'];
        if (publish === "yes") {
                res.redirect('/phoenix/agent/v9/add-new-clinic-confirmation');
    
        } else {
                res.redirect('/phoenix/agent/v9/add-new-clinic-notpublished');
        };
    })
    
    
    //remove (delete) clinic
    
    router.post('/phoenix/agent/v9/delete-clinic-cordell', function (req, res) {
        const removeclinic = req.session.data['removeclinic'];
        if (removeclinic === "yes") {
                res.redirect('/phoenix/agent/v9/delete-clinic-cordell-reason');
    
        } else {
                res.redirect('/phoenix/agent/v9/clinic-details-cordell');
        };
    
    
    })


    //assessment methods and types routing



    router.post('/phoenix/agent/v9/add-new-2', function (req, res) {
  var assessmentType = req.session.data['assessmentType']

if(assessmentType.includes('mental'))
{
        res.redirect('/phoenix/agent/v9/distance');
}
else if(assessmentType.includes('physical'))
{ 
        res.redirect('/phoenix/agent/v9/distance');
}
else if(assessmentType.includes('homevisit'))
{ 
        res.redirect('/phoenix/agent/v9/distance');
}
else if(assessmentType.includes('workplacevisit'))
{ 
        res.redirect('/phoenix/agent/v9/distance');
}


else {
        res.redirect('/phoenix/agent/v9/check-answers-clinic');
}})

//add new clinic routing check provider

router.post('/phoenix/agent/v9/add-new-clinic', function (req, res) {
        var assessmentType = req.session.data['assessmentType']
      
      if(assessmentType.includes('mental'))
      {
              res.redirect('/phoenix/agent/v9/add-new-clinic-distance');
      }
      else if(assessmentType.includes('physical'))
      { 
              res.redirect('/phoenix/agent/v9/add-new-clinic-distance');
      }
      else if(assessmentType.includes('homevisit'))
      { 
              res.redirect('/phoenix/agent/v9/add-new-clinic-distance');
      }
      else if(assessmentType.includes('workplacevisit'))
      { 
              res.redirect('/phoenix/agent/v9/add-new-clinic-distance');
      }
      
      
      else {
              res.redirect('/phoenix/agent/v9/add-clinic-check-answers');
      }})

      //add new clinic routing add-clinic-2

router.post('/phoenix/agent/v9/add-clinic-2', function (req, res) {
        var assessmentType = req.session.data['assessmentType']
      
      if(assessmentType.includes('mental'))
      {
              res.redirect('/phoenix/agent/v9/add-clinic-2-distance');
      }
      else if(assessmentType.includes('physical'))
      { 
              res.redirect('/phoenix/agent/v9/add-clinic-2-distance');
      }
      else if(assessmentType.includes('homevisit'))
      { 
              res.redirect('/phoenix/agent/v9/add-clinic-2-distance');
      }
      else if(assessmentType.includes('workplacevisit'))
      { 
              res.redirect('/phoenix/agent/v9/add-clinic-2-distance');
      }
      
      
      else {
              res.redirect('/phoenix/agent/v9/add-clinic-2-check-clinic');
      }})

      router.post('/phoenix/agent/v9/add-another-clinic-2', function (req, res) {
        const branch = req.session.data['branch'];
        if (branch === "yes") {
                res.redirect('/phoenix/agent/v9/add-clinic-2');
    
        } else {
                res.redirect('/phoenix/agent/v9/added-clinic-2-check-answers');
        };
    })

    router.post('/phoenix/agent/v9/distance', function (req, res) {
        const distance = req.session.data['distance'];
        if (distance === "no") {
                res.redirect('/phoenix/agent/v9/distance-can-travel');
        } else {
                res.redirect('/phoenix/agent/v9/check-answers-clinic');
        };
    })


    //////////            AGENT    VERSION 10
//Add branch

router.post('/phoenix/agent/v10/want-add-branch', function (req, res) {
        const branch = req.session.data['branch'];
        if (branch === "yes") {
                res.redirect('/phoenix/agent/v10/add-new-2');
    
        } else {
                res.redirect('/phoenix/agent/v10/added-branch');
        };
    })
  
    
    
    //add new clinic publish
    
    router.post('/phoenix/agent/v10/add-new-clinic-publish', function (req, res) {
        const publish = req.session.data['publish'];
        if (publish === "yes") {
                res.redirect('/phoenix/agent/v10/add-new-clinic-confirmation');
    
        } else {
                res.redirect('/phoenix/agent/v10/add-new-clinic-notpublished');
        };
    })
    
    
    //remove (delete) clinic
    
    router.post('/phoenix/agent/v10/delete-clinic-cordell', function (req, res) {
        const removeclinic = req.session.data['removeclinic'];
        if (removeclinic === "yes") {
                res.redirect('/phoenix/agent/v10/delete-clinic-cordell-reason');
    
        } else {
                res.redirect('/phoenix/agent/v10/clinic-details-cordell');
        };
    
    
    })


    //assessment methods and types routing



    router.post('/phoenix/agent/v10/add-new-1', function (req, res) {
  var assessmentType = req.session.data['assessmentType']

if(assessmentType.includes('mental'))
{
        res.redirect('/phoenix/agent/v10/distance');
}
else if(assessmentType.includes('physical'))
{ 
        res.redirect('/phoenix/agent/v10/distance');
}
else if(assessmentType.includes('homevisit'))
{ 
        res.redirect('/phoenix/agent/v10/distance');
}
else if(assessmentType.includes('workplacevisit'))
{ 
        res.redirect('/phoenix/agent/v10/distance');
}


else {
        res.redirect('/phoenix/agent/v10/add-new-2');
}})

//add new clinic routing check provider

router.post('/phoenix/agent/v10/add-new-clinic', function (req, res) {
        var assessmentType = req.session.data['assessmentType']
      
      if(assessmentType.includes('mental'))
      {
              res.redirect('/phoenix/agent/v10/add-new-clinic-distance');
      }
      else if(assessmentType.includes('physical'))
      { 
              res.redirect('/phoenix/agent/v10/add-new-clinic-distance');
      }
      else if(assessmentType.includes('homevisit'))
      { 
              res.redirect('/phoenix/agent/v10/add-new-clinic-distance');
      }
      else if(assessmentType.includes('workplacevisit'))
      { 
              res.redirect('/phoenix/agent/v10/add-new-clinic-distance');
      }
      
      
      else {
              res.redirect('/phoenix/agent/v10/add-new-2');
      }})

      //add new clinic routing add-clinic-2

router.post('/phoenix/agent/v10/add-clinic-2', function (req, res) {
        var assessmentType = req.session.data['assessmentType']
      
      if(assessmentType.includes('mental'))
      {
              res.redirect('/phoenix/agent/v10/add-clinic-2-distance');
      }
      else if(assessmentType.includes('physical'))
      { 
              res.redirect('/phoenix/agent/v10/add-clinic-2-distance');
      }
      else if(assessmentType.includes('homevisit'))
      { 
              res.redirect('/phoenix/agent/v10/add-clinic-2-distance');
      }
      else if(assessmentType.includes('workplacevisit'))
      { 
              res.redirect('/phoenix/agent/v10/add-clinic-2-distance');
      }
      
      
      else {
              res.redirect('/phoenix/agent/v10/added-branch');
      }})

      router.post('/phoenix/agent/v10/add-another-clinic-2', function (req, res) {
        const branch = req.session.data['branch'];
        if (branch === "yes") {
                res.redirect('/phoenix/agent/v10/add-clinic-2');
    
        } else {
                res.redirect('/phoenix/agent/v10/added-clinic-2-check-answers');
        };  })

        router.post('/phoenix/agent/v10/distance', function (req, res) {
                const distance = req.session.data['distance'];
                if (distance === "no") {
                        res.redirect('/phoenix/agent/v10/distance-can-travel');
                } else {
                        res.redirect('/phoenix/agent/v10/add-new-2');
                };
            })
 


    //////////            AGENT    VERSION 11
//Add branch

router.post('/phoenix/agent/v10/want-add-branch', function (req, res) {
        const branch = req.session.data['branch'];
        if (branch === "yes") {
                res.redirect('/phoenix/agent/v11/add-new-2');
    
        } else {
                res.redirect('/phoenix/agent/v11/added-branch');
        };
    })
  
    
    
    //add new clinic publish
    
    router.post('/phoenix/agent/v11/add-new-clinic-publish', function (req, res) {
        const publish = req.session.data['publish'];
        if (publish === "yes") {
                res.redirect('/phoenix/agent/v11/add-new-clinic-confirmation');
    
        } else {
                res.redirect('/phoenix/agent/v11/add-new-clinic-notpublished');
        };
    })
    
    
    //remove (delete) clinic
    
    router.post('/phoenix/agent/v11/delete-clinic-cordell', function (req, res) {
        const removeclinic = req.session.data['removeclinic'];
        if (removeclinic === "yes") {
                res.redirect('/phoenix/agent/v11/delete-clinic-cordell-reason');
    
        } else {
                res.redirect('/phoenix/agent/v11/clinic-details-cordell');
        };
    
    
    })


    //assessment methods and types routing



    router.post('/phoenix/agent/v11/add-new-1', function (req, res) {
  var assessmentType = req.session.data['assessmentType']

if(assessmentType.includes('mental'))
{
        res.redirect('/phoenix/agent/v11/distance');
}
else if(assessmentType.includes('physical'))
{ 
        res.redirect('/phoenix/agent/v11/distance');
}
else if(assessmentType.includes('homevisit'))
{ 
        res.redirect('/phoenix/agent/v11/distance');
}
else if(assessmentType.includes('workplacevisit'))
{ 
        res.redirect('/phoenix/agent/v11/distance');
}


else {
        res.redirect('/phoenix/agent/v11/add-new-2');
}})

//add new clinic routing check provider

router.post('/phoenix/agent/v11/add-new-clinic', function (req, res) {
        var assessmentType = req.session.data['assessmentType']
      
      if(assessmentType.includes('mental'))
      {
              res.redirect('/phoenix/agent/v11/add-new-clinic-distance');
      }
      else if(assessmentType.includes('physical'))
      { 
              res.redirect('/phoenix/agent/v11/add-new-clinic-distance');
      }
      else if(assessmentType.includes('homevisit'))
      { 
              res.redirect('/phoenix/agent/v11-add-new-clinic-distance');
      }
      else if(assessmentType.includes('workplacevisit'))
      { 
              res.redirect('/phoenix/agent/v11/add-new-clinic-distance');
      }
      
      
      else {
              res.redirect('/phoenix/agent/v11/add-new-2');
      }})

      //add new clinic routing add-clinic-2

router.post('/phoenix/agent/v10/add-clinic-2', function (req, res) {
        var assessmentType = req.session.data['assessmentType']
      
      if(assessmentType.includes('mental'))
      {
              res.redirect('/phoenix/agent/v11/add-clinic-2-distance');
      }
      else if(assessmentType.includes('physical'))
      { 
              res.redirect('/phoenix/agent/v11/add-clinic-2-distance');
      }
      else if(assessmentType.includes('homevisit'))
      { 
              res.redirect('/phoenix/agent/v11/add-clinic-2-distance');
      }
      else if(assessmentType.includes('workplacevisit'))
      { 
              res.redirect('/phoenix/agent/v11/add-clinic-2-distance');
      }
      
      
      else {
              res.redirect('/phoenix/agent/v11/added-branch');
      }})

      router.post('/phoenix/agent/v11/add-another-clinic-2', function (req, res) {
        const branch = req.session.data['branch'];
        if (branch === "yes") {
                res.redirect('/phoenix/agent/v11/add-clinic-2');
    
        } else {
                res.redirect('/phoenix/agent/v11/added-clinic-2-check-answers');
        };  })

        router.post('/phoenix/agent/v11/distance', function (req, res) {
                const distance = req.session.data['distance'];
                if (distance === "no") {
                        res.redirect('/phoenix/agent/v11/distance-can-travel');
                } else {
                        res.redirect('/phoenix/agent/v11/add-new-2');
                };
            })

    //////////            AGENT    VERSION 12
//Add branch

router.post('/phoenix/agent/v12/want-add-branch', function (req, res) {
        const branch = req.session.data['branch'];
        if (branch === "yes") {
                res.redirect('/phoenix/agent/v12/add-new-2');
    
        } else {
                res.redirect('/phoenix/agent/v12/added-branch');
        };
    })
  
    
    
    //add new clinic publish
    
    router.post('/phoenix/agent/v12/add-new-clinic-publish', function (req, res) {
        const publish = req.session.data['publish'];
        if (publish === "yes") {
                res.redirect('/phoenix/agent/v12/add-new-clinic-confirmation');
    
        } else {
                res.redirect('/phoenix/agent/v12/add-new-clinic-notpublished');
        };
    })
    
    
    //remove (delete) clinic
    
    router.post('/phoenix/agent/v12/delete-clinic-cordell', function (req, res) {
        const removeclinic = req.session.data['removeclinic'];
        if (removeclinic === "yes") {
                res.redirect('/phoenix/agent/v12/delete-clinic-cordell-reason');
    
        } else {
                res.redirect('/phoenix/agent/v12/clinic-details-cordell');
        };
    
    
    })


    //assessment methods and types routing



    router.post('/phoenix/agent/v12/add-new-2', function (req, res) {
  var assessmentType = req.session.data['assessmentType']

if(assessmentType.includes('mental'))
{
        res.redirect('/phoenix/agent/v12/distance');
}
else if(assessmentType.includes('physical'))
{ 
        res.redirect('/phoenix/agent/v12/distance');
}
else if(assessmentType.includes('homevisit'))
{ 
        res.redirect('/phoenix/agent/v12/distance');
}
else if(assessmentType.includes('workplacevisit'))
{ 
        res.redirect('/phoenix/agent/v12/distance');
}
else if(assessmentType.includes('visit'))
{ 
        res.redirect('/phoenix/agent/v12/distance');
}

else {
        res.redirect('/phoenix/agent/v12/check-answers-clinic');
}})

//add new clinic routing check provider

router.post('/phoenix/agent/v12/add-new-clinic', function (req, res) {
        var assessmentType = req.session.data['assessmentType']
      
      if(assessmentType.includes('mental'))
      {
              res.redirect('/phoenix/agent/v12/add-new-clinic-distance');
      }
      else if(assessmentType.includes('physical'))
      { 
              res.redirect('/phoenix/agent/v12/add-new-clinic-distance');
      }
      else if(assessmentType.includes('homevisit'))
      { 
              res.redirect('/phoenix/agent/v12/add-new-clinic-distance');
      }
      else if(assessmentType.includes('workplacevisit'))
      { 
              res.redirect('/phoenix/agent/v12/add-new-clinic-distance');
      }
      else if(assessmentType.includes('agreedvisit'))
      { 
              res.redirect('/phoenix/agent/v12/add-new-clinic-distance');
      }
      
      
      else {
              res.redirect('/phoenix/agent/v12/add-clinic-check-answers');
      }})

      //add new clinic routing add-clinic-2

router.post('/phoenix/agent/v12/add-clinic-2', function (req, res) {
        var assessmentType = req.session.data['assessmentType']
      
      if(assessmentType.includes('mental'))
      {
              res.redirect('/phoenix/agent/v12/add-clinic-2-distance');
      }
      else if(assessmentType.includes('physical'))
      { 
              res.redirect('/phoenix/agent/v12/add-clinic-2-distance');
      }
      else if(assessmentType.includes('homevisit'))
      { 
              res.redirect('/phoenix/agent/v12/add-clinic-2-distance');
      }
      else if(assessmentType.includes('workplacevisit'))
      { 
              res.redirect('/phoenix/agent/v12/add-clinic-2-distance');
      }
      else if(assessmentType.includes('agreedvisit'))
      { 
              res.redirect('/phoenix/agent/v12/add-clinic-2-distance');
      }
      
      else {
              res.redirect('/phoenix/agent/v12/add-clinic-2-check-clinic');
      }})

      router.post('/phoenix/agent/v12/add-another-clinic-2', function (req, res) {
        const branch = req.session.data['branch'];
        if (branch === "yes") {
                res.redirect('/phoenix/agent/v12/add-clinic-2');
    
        } else {
                res.redirect('/phoenix/agent/v12/added-clinic-2-check-answers');
        };
    })

    router.post('/phoenix/agent/v12/distance', function (req, res) {
        const distance = req.session.data['distance'];
        if (distance === "no") {
                res.redirect('/phoenix/agent/v12/distance-can-travel');
        } else {
                res.redirect('/phoenix/agent/v12/check-answers-clinic');
        };
    })

//     router.post('/phoenix/agent/v12/manage-whitelist', function (req, res) {
//         res.render('/phoenix/agent/v12/manage-whitelist-email-added')
//     })

router.post('/phoenix/agent/v12/manage-whitelist-remove', function (req, res) {
        var removeEmailAnswer = req.session.data['removeemail'];
        if (removeEmailAnswer === "yes") {
                res.redirect('/phoenix/agent/v12/manage-whitelist-email-removed');
        } else {
                res.redirect('/phoenix/agent/v12/manage-whitelist');
        };
    })
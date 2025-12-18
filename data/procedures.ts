// Rhinoplasty, Breast Augmentation, Liposuction, Facelift, Botox Injections, Tummy Tuck, Eyelid Surgery, Dermal Fillers, Otoplasty, Cheiloplasty (Lip Reduction), Cleft Lip and Palate Repair, Forehead Reduction, Dimpleplasty, Fat Grafting, Chin Augmentation, Breast Lift, Breast Reduction, Mini Tummy Tuck, Arm Lift, Thigh Lift, Post-Bariatric Body Contouring, Buttock Augmentation, Calf Augmentation, Hair Transplantation
export const plasticareProcedures : any[] = [
  {
    id: '1',
    name: 'Rhinoplasty',
    category: 'facial',
    description: 'Surgical reshaping of the nose to improve appearance and function',
    detailedDescription: `Nose job (rhinoplasty) operation are one of the most delicate and challenging procedure in the field of plastic surgery which requires surgical master together with vast amount of experience. The changes in the shape and structure of the nose, which is perhaps the most important structure element in the facial expression and arguably the most important aesthetic unit of the face, lead to a dramatic change in the overall "beauty" and expression of the face.\n\nThe corrections, restructuring and re-shapings that are going to be applied to the nose are decided during the interview with the patient before the surgery. The operation plan is made by evaluating the shape and size of the other facial parts and thereby the most realistic solutions are offered to meet the patient's expectations.\n\nThere mainly two major steps of nose operations. One of them is aesthetic reforming-reshaping and the other one is functional corrections which is the correction of breathing difficulties and nasal airway obstructions.`,
    bodyArea: 'nose',
    recoveryTime: '1-2 weeks',
    priceRange: '$7,000 - $15,000',
    duration: '2-3 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/rhinoplasty.jpg",
    alt: 'Close-up profile view of woman with elegant nose structure in soft natural lighting',
    benefits: [
      'Improved facial harmony and proportion',
      'Enhanced self-confidence',
      'Better breathing function',
      'Correction of birth defects or injury',
      'Natural-looking results',
      'Long-lasting transformation'
    ],
    idealCandidates: [
      'Adults with fully developed facial structure',
      'Non-smokers or willing to quit',
      'Realistic expectations about outcomes',
      'Good overall physical health',
      'Desire to improve nose appearance or function',
      'Stable mental and emotional health'
    ],
    beforeAfterImages: [
      {
        id: 'ba1',
        beforeImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/rhinoplasty-before.jpg",
        beforeAlt: 'Profile view of woman before rhinoplasty showing prominent nasal bridge',
        afterImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/rhinoplasty-after.jpg",
        afterAlt: 'Profile view of same woman after rhinoplasty with refined nasal contour',
        timeframe: '6 months post-op',
        procedureName: 'Rhinoplasty'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'How long does rhinoplasty recovery take?',
        answer: 'Initial recovery typically takes 1-2 weeks, with most swelling subsiding within 2-3 weeks. However, final results may take up to a year to fully develop as residual swelling gradually resolves. Most patients return to work within 7-10 days and can resume exercise after 3-4 weeks.'
      },
      {
        id: 'faq2',
        question: 'Will rhinoplasty leave visible scars?',
        answer: 'For closed rhinoplasty, all incisions are made inside the nose, leaving no visible scars. Open rhinoplasty involves a small incision on the columella (the tissue between nostrils), which typically heals to an imperceptible fine line. Our surgeons use meticulous techniques to minimize scarring.'
      }
    ],
    relatedProcedures: ['2', '3', '4']
  },
  {
    id: '2',
    name: 'Breast Augmentation',
    category: 'breast',
    description: 'Enhance breast size and shape with implants',
    detailedDescription: `This is one of the most commonly performed plastic surgery procedures. There are many choices and decisions to be made in this type of surgery. It's about more than the size of your breasts. It's about your body size and shape, symmetry, and achieving an appearance that fits your expectations and your lifestyle.\n\nWe help you decide the size and type of implant, its placement, and the location of the incision. We take the time to fully understand the outcome you want, and explain the options in detail to help you make the choices that are right for you.\n\nImplants can be placed directly beneath the breast, or inserted deeper under the pectoralis muscle that lies under the breast. We often recommend the under-the-muscle placement for patients who are thin and have little breast tissue.`,
    bodyArea: 'breast',
    recoveryTime: '1-2 weeks',
    priceRange: '$6,000 - $12,000',
    duration: '1-2 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/breast-augmentation.jpg",
    alt: 'Elegant woman in white dress showing natural feminine silhouette in soft studio lighting',
    benefits: [
      'Enhanced breast volume and fullness',
      'Improved body proportion and symmetry',
      'Restored breast shape after pregnancy',
      'Increased clothing options and fit',
      'Boosted self-confidence',
      'Natural-looking results'
    ],
    idealCandidates: [
      'Women seeking larger breast size',
      'Those with asymmetrical breasts',
      'Post-pregnancy volume loss',
      'Good overall health',
      'Realistic expectations',
      'Non-smokers or willing to quit'
    ],
    beforeAfterImages: [
      {
        id: 'ba3',
        beforeImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/breast-augmentation-before.jpg",
        beforeAlt: 'Front view of woman before breast augmentation showing smaller breast volume',
        afterImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/breast-augmentation-before.jpg",
        afterAlt: 'Front view of same woman after breast augmentation with enhanced fullness',
        timeframe: '3 months post-op',
        procedureName: 'Breast Augmentation'
      }
    ],
    faqs: [
      {
        id: 'faq4',
        question: 'How do I choose the right implant size?',
        answer: 'Implant selection involves considering your body frame, chest width, existing breast tissue, and aesthetic goals. We use 3D imaging and sizing tools during consultation to help you visualize different options. Our surgeons provide expert guidance to ensure proportionate, natural-looking results.'
      },
      {
        id: 'faq5',
        question: 'How long do breast implants last?',
        answer: 'Modern breast implants are designed to be long-lasting, but they are not considered lifetime devices. Most patients enjoy their results for 10-20 years before considering replacement. Regular monitoring and follow-up appointments help ensure implant integrity and optimal results.'
      }
    ],
    relatedProcedures: ['16', '17', '3']
  },
  {
    id: '3',
    name: 'Liposuction',
    category: 'body',
    description: 'Remove stubborn fat deposits and contour your body',
    detailedDescription: `Liposuction is the removal of abnormally shaped and/or excessive fat tissues from the body. It is performed through small holes opened on the skin by the help of fat removing cannulas.\n\nIn women liposuction is used to decrease the waist circumference, remove the excessive fat in the "below the chin" region (double chin), correct the contour deformities of the thighs and buttocks, and decrease the fatty folds on the abs and back.\n\nLiposuction is not a weight-loss solution but rather a body sculpting tool for patients near their ideal weight who want to eliminate localized fat pockets and achieve better body proportions.`,
    bodyArea: 'body',
    recoveryTime: '1-2 weeks',
    priceRange: '$3,000 - $10,000',
    duration: '1-4 hours',
    anesthesia: 'Local or General',
    isPopular: true,
    isNew: false,
    image: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/liposuction.jpg",
    alt: 'Fit woman in athletic wear showing toned body contours in bright fitness studio',
    benefits: [
      'Targeted fat removal',
      'Improved body contours',
      'Enhanced muscle definition',
      'Permanent fat cell removal',
      'Minimal scarring',
      'Versatile treatment areas'
    ],
    idealCandidates: [
      'Near ideal body weight',
      'Good skin elasticity',
      'Localized fat deposits',
      'Healthy lifestyle commitment',
      'Realistic expectations',
      'Non-smokers'
    ],
    beforeAfterImages: [
      {
        id: 'ba4',
        beforeImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/liposuction-before.jpg",
        beforeAlt: 'Side view of woman before liposuction showing abdominal fat deposits',
        afterImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/liposuction-after.jpg",
        afterAlt: 'Side view of same woman after liposuction with contoured flat abdomen',
        timeframe: '4 months post-op',
        procedureName: 'Liposuction'
      }
    ],
    faqs: [
      {
        id: 'faq6',
        question: 'Is liposuction a weight loss procedure?',
        answer: 'No, liposuction is a body contouring procedure, not a weight loss solution. It is designed to remove localized fat deposits and improve body proportions in patients who are already near their ideal weight. Maintaining a healthy lifestyle is essential for long-lasting results.'
      },
      {
        id: 'faq7',
        question: 'Will the fat come back after liposuction?',
        answer: 'Liposuction permanently removes fat cells from treated areas. However, remaining fat cells can still expand with weight gain. Maintaining a stable weight through diet and exercise ensures long-lasting results and prevents fat accumulation in untreated areas.'
      }
    ],
    relatedProcedures: ['6', '18', '19']
  },
  {
    id: '4',
    name: 'Facelift',
    category: 'facial',
    description: 'Restore youthful facial contours and reduce signs of aging',
    detailedDescription: `As people get older the most dramatic change of aging are visible on the face and neck region. It had been shown that this aging effect is not limited to the skin but also affecting the fat distribution, muscle position and even the shape of the bones that is defining the shape and form of the face as a final result.\n\nThese aging effects could also be evaluated as static and dynamic changes. Static change are usually related with the shape of the bones, the amount of soft tissues and fat over that area. The dynamic change are related with the elasticity of the tissues, their relation and attachment to the surrounding structure and activity and positioning of the muscles of the face and neck.\n\nThe peri-orbital region (area around the eyes) including the lower and upper eyelids, the positioning and angle of the eyebrows, the distance between eyebrows and upper eyelashes, the fullness of this region, presence of lower eye bags, the tightness of the eyelids are the most important components of the perception of an aging face.`,
    bodyArea: 'face',
    recoveryTime: '2-3 weeks',
    priceRange: '$12,000 - $25,000',
    duration: '3-5 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/facelift.jpg",
    alt: 'Mature elegant woman with smooth facial skin and defined jawline in natural lighting',
    benefits: [
      'Reduced facial sagging and wrinkles',
      'Restored facial contours',
      'Improved jawline definition',
      'Natural-looking rejuvenation',
      'Long-lasting results',
      'Enhanced self-confidence'
    ],
    idealCandidates: [
      'Moderate to severe facial aging',
      'Good skin elasticity',
      'Realistic expectations',
      'Good overall health',
      'Non-smokers',
      'Stable weight'
    ],
    beforeAfterImages: [
      {
        id: 'ba5',
        beforeImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/facelift-before.jpg",
        beforeAlt: 'Profile view of mature woman before facelift showing facial sagging and jowls',
        afterImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/facelift-after.jpg",
        afterAlt: 'Profile view of same woman after facelift with lifted contours and defined jawline',
        timeframe: '6 months post-op',
        procedureName: 'Facelift'
      }
    ],
    faqs: [
      {
        id: 'faq8',
        question: 'How long do facelift results last?',
        answer: 'Facelift results typically last 10-15 years, though individual results vary based on genetics, lifestyle, and skin care. While the aging process continues, most patients maintain a more youthful appearance than if they had not undergone surgery.'
      },
      {
        id: 'faq9',
        question: 'Will a facelift look natural?',
        answer: 'Modern facelift techniques focus on natural-looking results that refresh your appearance without creating an "overdone" look. Our surgeons use advanced methods that preserve your unique facial characteristics while addressing aging concerns.'
      }
    ],
    relatedProcedures: ['7', '14', '15']
  },
  {
    id: '5',
    name: 'Botox Injections',
    category: 'non-surgical',
    description: 'Smooth wrinkles and fine lines with injectable treatments',
    detailedDescription: `Botox is the most popular non-surgical cosmetic treatment worldwide, offering a quick, effective solution for reducing dynamic wrinkles caused by facial expressions.\n\nThis FDA-approved injectable temporarily relaxes targeted facial muscles, smoothing forehead lines, crow's feet, frown lines, and other expression-related wrinkles. Results appear within 3-7 days and last 3-4 months.\n\nOur experienced injectors use precise techniques to achieve natural-looking results that maintain your facial expressiveness while reducing unwanted lines.`,
    bodyArea: 'face',
    recoveryTime: 'None',
    priceRange: '$300 - $800',
    duration: '15-30 minutes',
    anesthesia: 'None',
    isPopular: true,
    isNew: false,
    image: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/botox.jpg",
    alt: 'Close-up of woman receiving facial injection treatment with smooth wrinkle-free skin',
    benefits: [
      'Reduced wrinkles and fine lines',
      'No downtime required',
      'Quick treatment sessions',
      'Natural-looking results',
      'Preventative anti-aging',
      'Minimal discomfort'
    ],
    idealCandidates: [
      'Adults with dynamic wrinkles',
      'Good overall health',
      'Realistic expectations',
      'Not pregnant or breastfeeding',
      'No neuromuscular disorders',
      'Desire for non-surgical treatment'
    ],
    beforeAfterImages: [
      {
        id: 'ba6',
        beforeImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/botox-before.jpg",
        beforeAlt: 'Close-up of woman before Botox showing forehead wrinkles and frown lines',
        afterImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/botox-after.jpg",
        afterAlt: 'Close-up of same woman after Botox with smooth forehead and reduced lines',
        timeframe: '2 weeks post-treatment',
        procedureName: 'Botox'
      }
    ],
    faqs: [
      {
        id: 'faq10',
        question: 'How long does Botox last?',
        answer: 'Botox results typically last 3-4 months, though individual duration varies based on metabolism, muscle strength, and treatment area. Regular maintenance treatments help sustain results and may extend duration over time.'
      },
      {
        id: 'faq11',
        question: 'Is Botox safe?',
        answer: 'Yes, Botox has an excellent safety profile with over 20 years of clinical use and FDA approval. When administered by qualified professionals, side effects are minimal and temporary.'
      }
    ],
    relatedProcedures: ['8', '14', '4']
  },
  {
    id: '6',
    name: 'Tummy Tuck',
    category: 'body',
    description: 'Remove excess skin and tighten abdominal muscles',
    detailedDescription: `A tummy tuck is a good option for individuals who have abdominal fat combined with stretched abdominal skin and separation of the muscles, often from pregnancy or repeated weight gains and losses. The abdominal muscles normally meet in the middle of the abdomen, creating a smooth appearance. However, in individuals who have had their abdomens stretched, the muscles have separated.\n\nThis condition, combined with excess fat in the lower abdomen, creates a persistent bulge that doesn't respond to exercise. The skin has lost its elasticity and may also have stretch marks.\n\nIn a tummy tuck, the skin and fatty tissue below the belly button are removed and the muscles are tightened and restored to their normal position. The result is an abdomen that is tighter, flatter and stronger.`,
    bodyArea: 'abdomen',
    recoveryTime: '2-4 weeks',
    priceRange: '$8,000 - $15,000',
    duration: '2-5 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/tummy-tuck.jpg",
    alt: 'Woman in fitness attire showing toned flat abdomen and defined waistline',
    benefits: [
      'Flatter, firmer abdomen',
      'Tightened abdominal muscles',
      'Improved body contours',
      'Reduced stretch marks',
      'Enhanced clothing fit',
      'Boosted self-confidence'
    ],
    idealCandidates: [
      'Excess abdominal skin',
      'Weakened abdominal muscles',
      'Completed childbearing',
      'Stable weight',
      'Good overall health',
      'Non-smokers'
    ],
    beforeAfterImages: [
      {
        id: 'ba7',
        beforeImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/tummy-tuck-before.jpg",
        beforeAlt: 'Front view of woman before tummy tuck showing loose abdominal skin',
        afterImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/tummy-tuck-after.jpg",
        afterAlt: 'Front view of same woman after tummy tuck with flat toned abdomen',
        timeframe: '6 months post-op',
        procedureName: 'Tummy Tuck'
      }
    ],
    faqs: [
      {
        id: 'faq12',
        question: 'Can I have more children after a tummy tuck?',
        answer: 'While it is possible to have children after a tummy tuck, pregnancy can compromise your results by stretching the abdominal skin and muscles again. We recommend completing your family before undergoing abdominoplasty to ensure long-lasting results.'
      },
      {
        id: 'faq13',
        question: 'Will a tummy tuck help me lose weight?',
        answer: 'A tummy tuck is not a weight loss procedure but rather a body contouring surgery. While you will lose some weight from removed skin and fat, the primary goal is to create a flatter, more toned abdominal profile.'
      }
    ],
    relatedProcedures: ['3', '18', '19']
  },
  {
    id: '7',
    name: 'Eyelid Surgery',
    category: 'facial',
    description: 'Rejuvenate tired-looking eyes and improve vision',
    detailedDescription: `Eyelid surgery (blepharoplasty) is cosmetic surgery to remove excess skin or fat from the eyelids. The aim is to improve hooded or drooping eyelids or eye bags.\n\nA blepharoplasty can be done under local anaesthetic with sedation or under general anaesthetic. An upper blepharoplasty may take about 1 hour. Surgery on the lower lid may take up to 2 hours. Most patients can go home the same day.\n\nThis delicate procedure creates a more alert, youthful, and refreshed appearance. Upper blepharoplasty can also improve peripheral vision obstructed by sagging eyelids.`,
    bodyArea: 'eyes',
    recoveryTime: '1-2 weeks',
    priceRange: '$4,000 - $8,000',
    duration: '1-3 hours',
    anesthesia: 'Local or General',
    isPopular: true,
    isNew: false,
    image: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/eyelid.jpg",
    alt: 'Close-up of woman with bright alert eyes and smooth eyelid contours',
    benefits: [
      'More youthful eye appearance',
      'Reduced puffiness and bags',
      'Improved vision (upper lids)',
      'Natural-looking results',
      'Long-lasting effects',
      'Enhanced facial harmony'
    ],
    idealCandidates: [
      'Drooping or sagging eyelids',
      'Under-eye bags or puffiness',
      'Good overall health',
      'Realistic expectations',
      'Non-smokers',
      'No serious eye conditions'
    ],
    beforeAfterImages: [
      {
        id: 'ba8',
        beforeImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/eyelid-before.jpg",
        beforeAlt: 'Close-up of woman before eyelid surgery showing drooping upper lids',
        afterImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/eyelid-after.jpg",
        afterAlt: 'Close-up of same woman after eyelid surgery with lifted lids',
        timeframe: '3 months post-op',
        procedureName: 'Eyelid Surgery'
      }
    ],
    faqs: [
      {
        id: 'faq14',
        question: 'Will eyelid surgery leave visible scars?',
        answer: 'Incisions are strategically placed in the natural creases of the eyelids, making scars virtually invisible once healed. Our surgeons use precise techniques and fine sutures to minimize scarring.'
      },
      {
        id: 'faq15',
        question: 'Can eyelid surgery improve my vision?',
        answer: 'Yes, upper blepharoplasty can improve peripheral vision when drooping eyelids obstruct your field of view. Many patients experience functional improvements along with aesthetic enhancement.'
      }
    ],
    relatedProcedures: ['4', '12', '5']
  },
  {
    id: '8',
    name: 'Dermal Fillers',
    category: 'non-surgical',
    description: 'Restore volume and smooth wrinkles with injectable fillers',
    detailedDescription: `Dermal fillers are injectable treatments that restore lost facial volume, smooth wrinkles, and enhance facial contours for a more youthful appearance.\n\nWe offer a comprehensive range of FDA-approved fillers including hyaluronic acid-based products to address various aging concerns.\n\nFillers can enhance lips, cheeks, and chin, fill nasolabial folds and marionette lines, smooth under-eye hollows, and restore hand volume. Results are immediate and can last from 6 months to 2 years.`,
    bodyArea: 'face',
    recoveryTime: 'None',
    priceRange: '$600 - $2,000',
    duration: '30-60 minutes',
    anesthesia: 'None',
    isPopular: true,
    isNew: false,
    image: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/dermal-fillers.jpg",
    alt: 'Woman receiving facial filler injection treatment',
    benefits: [
      'Immediate volume restoration',
      'Smooth wrinkles and folds',
      'Enhanced facial contours',
      'No downtime required',
      'Natural-looking results',
      'Reversible treatments'
    ],
    idealCandidates: [
      'Volume loss or wrinkles',
      'Good overall health',
      'Realistic expectations',
      'Not pregnant or breastfeeding',
      'No active skin infections',
      'Desire for non-surgical treatment'
    ],
    beforeAfterImages: [
      {
        id: 'ba9',
        beforeImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/dermal-fillers-before.jpg",
        beforeAlt: 'Close-up before dermal fillers showing volume loss',
        afterImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/dermal-fillers-after.jpg",
        afterAlt: 'Close-up after dermal fillers with restored volume',
        timeframe: 'Immediately post-treatment',
        procedureName: 'Dermal Fillers'
      }
    ],
    faqs: [
      {
        id: 'faq16',
        question: 'How long do dermal fillers last?',
        answer: 'Filler longevity varies by product type and treatment area. Hyaluronic acid fillers typically last 6-18 months. Factors like metabolism, lifestyle, and injection technique affect duration.'
      },
      {
        id: 'faq17',
        question: 'Are dermal fillers safe?',
        answer: 'Yes, FDA-approved dermal fillers have excellent safety profiles when administered by qualified professionals. Side effects are typically mild and temporary.'
      }
    ],
    relatedProcedures: ['5', '14', '13']
  },
  {
    id: '9',
    name: 'Otoplasty',
    category: 'facial',
    description: 'Cosmetic ear surgery to change shape, position or size',
    detailedDescription: `Otoplasty — also known as cosmetic ear surgery — is a procedure to change the shape, position or size of the ears.\n\nYou might choose to have otoplasty if you're bothered by how far your ears stick out from your head. You might also consider otoplasty if your ear or ears are misshapen due to an injury or birth defect.\n\nOtoplasty can be done at any age after the ears have reached their full size — usually after age 5 — through adulthood.`,
    bodyArea: 'ears',
    recoveryTime: '1-2 weeks',
    priceRange: '$3,000 - $6,000',
    duration: '1-2 hours',
    anesthesia: 'Local or General',
    isPopular: false,
    isNew: false,
    image: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/otoplasty.jpg",
    alt: 'Profile view showing well-positioned ears',
    benefits: [
      'Improved ear position and symmetry',
      'Enhanced facial balance',
      'Boosted self-confidence',
      'Correction of birth defects',
      'Natural-looking results',
      'Permanent correction'
    ],
    idealCandidates: [
      'Age 5 or older',
      'Protruding or misshapen ears',
      'Good overall health',
      'Realistic expectations',
      'Non-smokers',
      'Desire for improved appearance'
    ],
    beforeAfterImages: [
      {
        id: 'ba10',
        beforeImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/otoplasty-before.jpg",
        beforeAlt: 'Profile view before otoplasty showing protruding ears',
        afterImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/otoplasty-after.jpg",
        afterAlt: 'Profile view after otoplasty with ears closer to head',
        timeframe: '3 months post-op',
        procedureName: 'Otoplasty'
      }
    ],
    faqs: [
      {
        id: 'faq18',
        question: 'At what age can otoplasty be performed?',
        answer: 'Otoplasty can be performed once the ears have reached their full size, typically after age 5. The procedure can be done at any age through adulthood.'
      },
      {
        id: 'faq19',
        question: 'Is otoplasty permanent?',
        answer: 'Yes, otoplasty results are generally permanent. The reshaped cartilage maintains its new position indefinitely. However, proper post-operative care is essential.'
      }
    ],
    relatedProcedures: ['1', '4', '7']
  },
  {
    id: '10',
    name: 'Cheiloplasty (Lip Reduction)',
    category: 'facial',
    description: 'Lip reduction to achieve balanced lip proportions',
    detailedDescription: `Also called Reduction Cheiloplasty, lip reduction is a type of cosmetic plastic surgery that helps to achieve a balanced relationship between the upper and lower lips. The goal is to enhance facial appearance by modifying the lips while maintaining their normal function.\n\nIn many cases, a lip reduction procedure can help to normalize or restore proper oral function. This is especially helpful for those whose lips do not seal adequately, and thereby cause drooling, poor speech, or other challenges.`,
    bodyArea: 'lips',
    recoveryTime: '1-2 weeks',
    priceRange: '$2,500 - $5,000',
    duration: '1-2 hours',
    anesthesia: 'Local or General',
    isPopular: false,
    isNew: false,
    image: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/cheiloplasty.jpg",
    alt: 'Close-up of woman with balanced lip proportions',
    benefits: [
      'Improved facial proportion',
      'Enhanced lip symmetry',
      'Better oral function',
      'Natural-looking results',
      'Improved speech clarity',
      'Boosted self-confidence'
    ],
    idealCandidates: [
      'Disproportionately large lips',
      'Functional oral issues',
      'Good overall health',
      'Realistic expectations',
      'Non-smokers',
      'Adults with fully developed features'
    ],
    beforeAfterImages: [
      {
        id: 'ba11',
        beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffe498e9-1764663240453.png",
        beforeAlt: 'Front view before lip reduction showing large lips',
        afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_118c32215-1764669220074.png",
        afterAlt: 'Front view after lip reduction with balanced proportions',
        timeframe: '3 months post-op',
        procedureName: 'Lip Reduction'
      }
    ],
    faqs: [
      {
        id: 'faq20',
        question: 'Will lip reduction affect my ability to speak or eat?',
        answer: 'No, when performed correctly, lip reduction maintains normal oral function. In fact, many patients experience improved function, especially if they previously had difficulty with lip closure or speech.'
      },
      {
        id: 'faq21',
        question: 'Will there be visible scarring after lip reduction?',
        answer: 'Incisions are made on the inside of the lips along the natural border, making scars virtually invisible. Our surgeons use meticulous techniques to ensure minimal scarring.'
      }
    ],
    relatedProcedures: ['1', '8', '5']
  },
  {
    id: '11',
    name: 'Cleft Lip and Palate Repair',
    category: 'facial',
    description: 'Surgical repair of congenital lip and palate openings',
    detailedDescription: `A cleft lip and cleft palate are openings in a baby's upper lip or roof of the mouth (palate). They're congenital abnormalities (birth defects) that form while a fetus develops in the womb.\n\nOur lips form between four and seven weeks of pregnancy. Tissues from each side of our head join together at the center of the face to make our lips and mouth. A cleft lip happens when the tissues that make the lips don't join completely. The roof of your mouth (palate) forms between six and nine weeks of pregnancy.\n\nCleft lip and cleft palate can occur on one or both sides of the mouth. Surgery is required to repair cleft lip and cleft palate.`,
    bodyArea: 'face',
    recoveryTime: '2-4 weeks',
    priceRange: '$5,000 - $15,000',
    duration: '2-6 hours',
    anesthesia: 'General',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18173ba4a-1764929356249.png",
    alt: 'Close-up showing successful cleft repair',
    benefits: [
      'Restored facial structure',
      'Improved feeding ability',
      'Better speech development',
      'Enhanced breathing function',
      'Normal dental development',
      'Improved quality of life'
    ],
    idealCandidates: [
      'Infants with cleft lip/palate',
      'Good overall health',
      'Adequate weight for surgery',
      'No other major health issues',
      'Proper nutritional status',
      'Family support system'
    ],
    beforeAfterImages: [
      {
        id: 'ba12',
        beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10e48aa41-1765003959157.png",
        beforeAlt: 'Before cleft lip repair',
        afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f79f1cdf-1765003959007.png",
        afterAlt: 'After cleft lip repair showing restored structure',
        timeframe: '6 months post-op',
        procedureName: 'Cleft Lip Repair'
      }
    ],
    faqs: [
      {
        id: 'faq22',
        question: 'At what age is cleft lip and palate repair performed?',
        answer: 'Cleft lip repair is typically performed when the baby is 3-6 months old. Cleft palate repair is usually done between 9-18 months of age. The timing depends on the child\'s health and growth.'
      },
      {
        id: 'faq23',
        question: 'Will my child need additional surgeries?',
        answer: 'Many children with cleft lip and palate require multiple surgeries throughout childhood and adolescence. These may include additional repairs, bone grafting, and orthodontic procedures.'
      }
    ],
    relatedProcedures: ['1', '9', '7']
  },
  {
    id: '12',
    name: 'Forehead Reduction',
    category: 'facial',
    description: 'Hairline lowering surgery to shorten forehead',
    detailedDescription: `Forehead reduction is a type of plastic surgery that's designed to shorten the distance between your hairline and your eyebrows. It is also commonly called hairline lowering or scalp advancement since the procedure involves moving the hair-bearing scalp forward and securing your hairline in a lower position on your forehead.\n\nThis is a "high patient satisfaction surgery"; the vast majority of patients who undergo forehead reduction surgery are pleased with the results. It can help create more balanced and harmonious facial proportions.\n\nThose who undergo this surgery have better and quicker results with forehead reduction than they would with hair restoration surgery.`,
    bodyArea: 'forehead',
    recoveryTime: '1-2 weeks',
    priceRange: '$6,000 - $12,000',
    duration: '2-3 hours',
    anesthesia: 'General',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_174d50f37-1764644109417.png",
    alt: 'Woman with balanced forehead proportions and natural hairline',
    benefits: [
      'Shortened forehead height',
      'More balanced facial proportions',
      'Natural-looking hairline',
      'Immediate results',
      'High satisfaction rate',
      'Permanent correction'
    ],
    idealCandidates: [
      'High or receding hairline',
      'Disproportionate forehead',
      'Good scalp laxity',
      'Realistic expectations',
      'Good overall health',
      'Non-smokers'
    ],
    beforeAfterImages: [
      {
        id: 'ba13',
        beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f51273f1-1764644109751.png",
        beforeAlt: 'Front view before forehead reduction showing high hairline',
        afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_14f312e9d-1764742602630.png",
        afterAlt: 'Front view after forehead reduction with lowered hairline',
        timeframe: '6 months post-op',
        procedureName: 'Forehead Reduction'
      }
    ],
    faqs: [
      {
        id: 'faq24',
        question: 'Will the scar from forehead reduction be visible?',
        answer: 'The incision is placed along the hairline in an irregular pattern to mimic natural hair growth. With proper technique and healing, the scar becomes well-camouflaged within the hairline.'
      },
      {
        id: 'faq25',
        question: 'How much can the hairline be lowered?',
        answer: 'Most patients can achieve a hairline lowering of 1.5 to 2.5 centimeters. The exact amount depends on scalp laxity and individual anatomy.'
      }
    ],
    relatedProcedures: ['1', '4', '24']
  },
  {
    id: '13',
    name: 'Dimpleplasty',
    category: 'facial',
    description: 'Create dimples on the cheeks for enhanced facial charm',
    detailedDescription: `A dimpleplasty is a type of plastic surgery used to create dimples on the cheeks. Dimples are the indentations that occur when some people smile. They're most often located on the bottoms of the cheeks.\n\nNot everyone is born with this facial trait. In some people, dimples are naturally occurring from indentations in the dermis caused by the deeper facial muscles.\n\nDimples are regarded by some cultures as a sign of beauty, good luck, and even fortune. Due to such perceived benefits, the number of dimple surgeries has increased significantly in recent years.`,
    bodyArea: 'cheeks',
    recoveryTime: '1-2 weeks',
    priceRange: '$1,500 - $4,000',
    duration: '30-60 minutes',
    anesthesia: 'Local',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1af1fbb3e-1764644110177.png",
    alt: 'Close-up of woman smiling with natural-looking dimples',
    benefits: [
      'Enhanced facial attractiveness',
      'Youthful appearance',
      'Natural-looking dimples',
      'Quick procedure',
      'Minimal downtime',
      'Permanent results'
    ],
    idealCandidates: [
      'Desire for dimples',
      'Good cheek tissue structure',
      'Realistic expectations',
      'Good overall health',
      'Adults with mature facial features',
      'No active facial infections'
    ],
    beforeAfterImages: [
      {
        id: 'ba14',
        beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18e9c231e-1764676129036.png",
        beforeAlt: 'Woman smiling before dimpleplasty without dimples',
        afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_174d50f37-1764644109417.png",
        afterAlt: 'Same woman smiling after dimpleplasty with natural dimples',
        timeframe: '2 months post-op',
        procedureName: 'Dimpleplasty'
      }
    ],
    faqs: [
      {
        id: 'faq26',
        question: 'Are dimpleplasty results permanent?',
        answer: 'Yes, dimpleplasty creates permanent dimples. Initially, the dimples may be visible even without smiling, but within a few weeks to months, they will only appear when you smile.'
      },
      {
        id: 'faq27',
        question: 'Is dimpleplasty reversible?',
        answer: 'While the procedure creates permanent dimples, they can be revised if desired. However, complete reversal is difficult. It\'s important to carefully consider your decision.'
      }
    ],
    relatedProcedures: ['5', '8', '10']
  },
  {
    id: '14',
    name: 'Fat Grafting',
    category: 'facial',
    description: 'Natural volume restoration using your own fat',
    detailedDescription: `For fat grafting we obtain high quality fat from the patient's belly or thighs and then wash it with solutions to clear it from tissue debris and blood. The fat is then thinned and filtered. At the last step it is injected with small blunt cannulas to the planned locations.\n\nNano-fat is produced by extracting the fat with a special cannula with holes less than 2 mm in diameter. The extracted fat includes the stromal vascular fraction which has positive effects on increasing skin quality, helping to correct hyperpigmentation and rejuvenating it.\n\nCombining nanofat with volume restoring normal fat injection gives amazing results in terms of facial rejuvenation.`,
    bodyArea: 'face',
    recoveryTime: '1-2 weeks',
    priceRange: '$3,000 - $8,000',
    duration: '1-3 hours',
    anesthesia: 'Local or General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_118c32215-1764669220074.png",
    alt: 'Woman with restored facial volume and youthful contours',
    benefits: [
      'Natural volume restoration',
      'Uses your own tissue',
      'Improved skin quality',
      'Long-lasting results',
      'No risk of rejection',
      'Multiple area treatment'
    ],
    idealCandidates: [
      'Facial volume loss',
      'Available donor fat',
      'Good overall health',
      'Realistic expectations',
      'Non-smokers',
      'Stable weight'
    ],
    beforeAfterImages: [
      {
        id: 'ba15',
        beforeImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/cheiloplasty-before.jpg",
        beforeAlt: 'Woman before fat grafting showing volume loss',
        afterImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/cheiloplasty-before.jpg",
        afterAlt: 'Same woman after fat grafting with restored fullness',
        timeframe: '6 months post-op',
        procedureName: 'Fat Grafting'
      }
    ],
    faqs: [
      {
        id: 'faq28',
        question: 'How long does fat grafting last?',
        answer: 'Fat grafting can provide long-lasting results. Typically, 50-70% of the transferred fat survives permanently. Final results are visible after 3-6 months.'
      },
      {
        id: 'faq29',
        question: 'Is fat grafting better than fillers?',
        answer: 'Fat grafting offers natural, long-lasting results using your own tissue with no risk of allergic reaction. Unlike temporary fillers, properly grafted fat becomes a permanent part of the treated area.'
      }
    ],
    relatedProcedures: ['8', '4', '15']
  },
  {
    id: '15',
    name: 'Chin Augmentation',
    category: 'facial',
    description: 'Enhance chin projection for improved facial balance',
    detailedDescription: `A recessed or "weak" chin can be surgically altered to present a more balanced and proportionate appearance. One option is a chin implant, but they may move out of position. Chin advancement is often a better option.\n\nThrough this procedure, we move the chin bone forward through an incision in the mouth. The result often makes a dramatic improvement in the patient's appearance.\n\nThe main procedures include: increasing chin projection, defining the jawline. Implants, fillers, fat injections can be used. If the patient has an over projected chin, the prominence can be shaved from an oral incision without any scar.`,
    bodyArea: 'chin',
    recoveryTime: '1-2 weeks',
    priceRange: '$4,000 - $8,000',
    duration: '1-2 hours',
    anesthesia: 'Local or General',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18173ba4a-1764929356249.png",
    alt: 'Profile view showing balanced chin and jawline',
    benefits: [
      'Improved facial profile',
      'Enhanced jawline definition',
      'Better facial proportion',
      'Natural-looking results',
      'No visible scars',
      'Permanent enhancement'
    ],
    idealCandidates: [
      'Weak or recessed chin',
      'Good overall health',
      'Realistic expectations',
      'Completed facial growth',
      'Non-smokers',
      'Good bone structure'
    ],
    beforeAfterImages: [
      {
        id: 'ba16',
        beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10e48aa41-1765003959157.png",
        beforeAlt: 'Profile before chin augmentation showing recessed chin',
        afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f79f1cdf-1765003959007.png",
        afterAlt: 'Profile after chin augmentation with improved projection',
        timeframe: '4 months post-op',
        procedureName: 'Chin Augmentation'
      }
    ],
    faqs: [
      {
        id: 'faq30',
        question: 'Chin implant vs chin advancement - which is better?',
        answer: 'Chin advancement (sliding genioplasty) is often preferred as it uses your own bone, eliminating risks of implant migration or bone erosion. It provides more dramatic results and is permanent.'
      },
      {
        id: 'faq31',
        question: 'Will chin augmentation affect my bite?',
        answer: 'When performed correctly, chin augmentation should not affect your bite or dental occlusion. The procedure focuses on the lower portion of the chin bone.'
      }
    ],
    relatedProcedures: ['1', '4', '14']
  },
  {
    id: '16',
    name: 'Breast Lift',
    category: 'breast',
    description: 'Lift and reshape sagging breasts',
    detailedDescription: `The breast lift is for patients who have a condition called ptosis, which means that the breasts droop. The nipples are often below the level of the fold under the breast and are beginning to turn downward. In extreme cases, the nipples may be pointed straight down.\n\nDuring a breast lift, portions of the skin are removed to allow us to lift and reshape the breast, moving the nipples to a higher position and orienting them naturally outward. This procedure does leave a visible scar, but also results in a more aesthetically pleasing shape.\n\nBreast augmentation can be combined with a breast lift if desired.`,
    bodyArea: 'breast',
    recoveryTime: '2-3 weeks',
    priceRange: '$7,000 - $12,000',
    duration: '2-4 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd99ffad-1764650957024.png",
    alt: 'Woman showing lifted breast contour',
    benefits: [
      'Lifted breast position',
      'Improved breast shape',
      'Elevated nipple position',
      'Enhanced confidence',
      'Better clothing fit',
      'Youthful appearance'
    ],
    idealCandidates: [
      'Sagging or drooping breasts',
      'Nipples pointing downward',
      'Completed childbearing',
      'Stable weight',
      'Good overall health',
      'Non-smokers'
    ],
    beforeAfterImages: [
      {
        id: 'ba17',
        beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_2933c408a-1765003964134.png",
        beforeAlt: 'Side view before breast lift showing ptosis',
        afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1377f8f0b-1764658636109.png",
        afterAlt: 'Side view after breast lift with elevated position',
        timeframe: '6 months post-op',
        procedureName: 'Breast Lift'
      }
    ],
    faqs: [
      {
        id: 'faq32',
        question: 'Can I combine breast lift with augmentation?',
        answer: 'Yes, breast lift can be combined with augmentation to restore both position and volume. This combination is common for patients who want fuller, lifted breasts.'
      },
      {
        id: 'faq33',
        question: 'How long do breast lift results last?',
        answer: 'Breast lift results can last many years, though aging, gravity, and weight changes will continue to affect breast appearance. Maintaining stable weight helps preserve results.'
      }
    ],
    relatedProcedures: ['2', '17', '3']
  },
  {
    id: '17',
    name: 'Breast Reduction',
    category: 'breast',
    description: 'Reduce breast size to relieve pain and improve comfort',
    detailedDescription: `Large, heavy breasts can cause neck and back pain, skin rashes, and deep indentations in the shoulder from bra straps. The procedure for a breast reduction is similar to that of a breast lift, with a similar incision and relocation of the nipples to a normal position.\n\nIf heavy breasts are causing you pain or other medical problems, this procedure may be covered by your insurance. Reductions vary in complexity.`,
    bodyArea: 'breast',
    recoveryTime: '2-3 weeks',
    priceRange: '$8,000 - $15,000',
    duration: '2-4 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd99ffad-1764650957024.png",
    alt: 'Woman with proportionate breast size',
    benefits: [
      'Relief from pain and discomfort',
      'Reduced shoulder indentations',
      'Improved posture',
      'Enhanced physical activity',
      'Better clothing fit',
      'Boosted self-confidence'
    ],
    idealCandidates: [
      'Overly large breasts',
      'Chronic pain from breast weight',
      'Completed childbearing',
      'Stable weight',
      'Good overall health',
      'Non-smokers'
    ],
    beforeAfterImages: [
      {
        id: 'ba18',
        beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_2933c408a-1765003964134.png",
        beforeAlt: 'Front view before breast reduction showing large breasts',
        afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1377f8f0b-1764658636109.png",
        afterAlt: 'Front view after breast reduction with proportionate size',
        timeframe: '6 months post-op',
        procedureName: 'Breast Reduction'
      }
    ],
    faqs: [
      {
        id: 'faq34',
        question: 'Will insurance cover breast reduction?',
        answer: 'Insurance may cover breast reduction if you meet specific criteria demonstrating medical necessity, such as documented pain, skin problems, or functional limitations. We can help with insurance documentation.'
      },
      {
        id: 'faq35',
        question: 'Can I breastfeed after breast reduction?',
        answer: 'While many women can breastfeed after reduction, the procedure may affect milk production and delivery. If future breastfeeding is important, discuss this during consultation.'
      }
    ],
    relatedProcedures: ['16', '2', '6']
  },
  {
    id: '18',
    name: 'Mini Tummy Tuck',
    category: 'body',
    description: 'Limited abdominoplasty for lower abdomen',
    detailedDescription: `Good candidates for this procedure are generally younger patients who have some excess fat and weakened abdominal muscles, but don't have large amounts of stretched or excess skin.\n\nIn a mini-tummy tuck, the fat is removed by liposuction, the muscles are tightened, and a small amount of excess skin is removed. As with a full tummy tuck, the result is an abdomen that is both slimmer and stronger.`,
    bodyArea: 'abdomen',
    recoveryTime: '1-2 weeks',
    priceRange: '$5,000 - $10,000',
    duration: '1-2 hours',
    anesthesia: 'General',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12dc6ed53-1764672588961.png",
    alt: 'Woman showing toned lower abdomen',
    benefits: [
      'Flatter lower abdomen',
      'Shorter recovery time',
      'Smaller incision',
      'Tightened muscles',
      'Improved contour',
      'Less invasive than full tummy tuck'
    ],
    idealCandidates: [
      'Minimal excess skin',
      'Lower abdominal concerns only',
      'Good skin elasticity',
      'Stable weight',
      'Good overall health',
      'Realistic expectations'
    ],
    beforeAfterImages: [
      {
        id: 'ba19',
        beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1788da110-1765003959100.png",
        beforeAlt: 'Front view before mini tummy tuck',
        afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11127e061-1764656058817.png",
        afterAlt: 'Front view after mini tummy tuck with flat lower abdomen',
        timeframe: '4 months post-op',
        procedureName: 'Mini Tummy Tuck'
      }
    ],
    faqs: [
      {
        id: 'faq36',
        question: 'How is a mini tummy tuck different from a full tummy tuck?',
        answer: 'A mini tummy tuck addresses only the lower abdomen with a shorter incision and no repositioning of the belly button. It has a quicker recovery but is only suitable for patients with minimal skin excess.'
      },
      {
        id: 'faq37',
        question: 'Am I a candidate for mini tummy tuck?',
        answer: 'You may be a candidate if your concerns are limited to the area below the belly button and you have good skin elasticity. A consultation will determine if mini or full tummy tuck is best for you.'
      }
    ],
    relatedProcedures: ['6', '3', '19']
  },
  {
    id: '19',
    name: 'Arm Lift',
    category: 'body',
    description: 'Remove excess arm skin for firmer contours',
    detailedDescription: `Like a tummy tuck or a thigh lift, this procedure improves the contour of the upper arms when liposuction is not sufficient or when there is excess skin present. There are several different kinds of arm lifts depending on the amount and location of the excess skin.\n\nThis procedure can make your upper arms much firmer and, for some people, it becomes easier to buy clothing because arm fitment is improved. It takes just a few days to go back to normal activities. The satisfaction rate is very high.`,
    bodyArea: 'arms',
    recoveryTime: '1-2 weeks',
    priceRange: '$5,000 - $8,000',
    duration: '2-3 hours',
    anesthesia: 'General',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb1f2025-1764906558706.png",
    alt: 'Woman showing toned arm contours',
    benefits: [
      'Firmer upper arms',
      'Removed excess skin',
      'Improved arm definition',
      'Better clothing fit',
      'Enhanced confidence',
      'Long-lasting results'
    ],
    idealCandidates: [
      'Excess arm skin',
      'Stable weight',
      'Good overall health',
      'Non-smokers',
      'Realistic about scarring',
      'Completed weight loss'
    ],
    beforeAfterImages: [
      {
        id: 'ba20',
        beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_182ff5996-1764792567841.png",
        beforeAlt: 'Side view before arm lift showing excess skin',
        afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_140df08ed-1765003957858.png",
        afterAlt: 'Side view after arm lift with toned contours',
        timeframe: '4 months post-op',
        procedureName: 'Arm Lift'
      }
    ],
    faqs: [
      {
        id: 'faq38',
        question: 'Where will the scars be located?',
        answer: 'Scars are typically located on the inside or back of the arm, extending from the underarm to the elbow. While visible, they fade over time and are often concealed when arms are at your sides.'
      },
      {
        id: 'faq39',
        question: 'Can I combine arm lift with liposuction?',
        answer: 'Yes, liposuction is often combined with arm lift to remove excess fat and achieve optimal contour. This combination provides comprehensive arm rejuvenation.'
      }
    ],
    relatedProcedures: ['3', '20', '21']
  },
  {
    id: '20',
    name: 'Thigh Lift',
    category: 'body',
    description: 'Reshape thighs by removing excess skin and fat',
    detailedDescription: `Like a tummy tuck or an arm lift, this procedure improves the contour of the upper thigh when liposuction is not sufficient or when there is excess skin present. There are several different kinds of thigh lifts, otherwise known as thighplasty.\n\nThe type depends on the amount and location of the excess skin. In most patients the scar can be located in the fold of the groin where it is well hidden. Other patients with significant excess skin may require an additional incision down the inside of the thigh.\n\nThis procedure can make your thighs much firmer and, for some people, it becomes easier to buy clothing. The satisfaction rate is high.`,
    bodyArea: 'thighs',
    recoveryTime: '2-3 weeks',
    priceRange: '$6,000 - $12,000',
    duration: '2-4 hours',
    anesthesia: 'General',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb1f2025-1764906558706.png",
    alt: 'Woman showing toned thigh contours',
    benefits: [
      'Firmer thigh contours',
      'Removed excess skin',
      'Improved leg appearance',
      'Better clothing fit',
      'Reduced chafing',
      'Enhanced confidence'
    ],
    idealCandidates: [
      'Excess thigh skin',
      'Stable weight',
      'Good overall health',
      'Non-smokers',
      'Realistic expectations',
      'Completed weight loss'
    ],
    beforeAfterImages: [
      {
        id: 'ba21',
        beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_182ff5996-1764792567841.png",
        beforeAlt: 'Front view before thigh lift showing excess skin',
        afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_140df08ed-1765003957858.png",
        afterAlt: 'Front view after thigh lift with firmer contours',
        timeframe: '6 months post-op',
        procedureName: 'Thigh Lift'
      }
    ],
    faqs: [
      {
        id: 'faq40',
        question: 'How visible are thigh lift scars?',
        answer: 'Scars are typically hidden in the groin crease. Some patients may have additional scars on the inner thigh, placed toward the back where they are less visible when standing.'
      },
      {
        id: 'faq41',
        question: 'Is thigh lift recovery difficult?',
        answer: 'Recovery requires following post-operative instructions carefully. You will need to limit activity for several weeks and avoid strenuous exercise. Most patients return to normal activities within 2-3 weeks.'
      }
    ],
    relatedProcedures: ['19', '3', '21']
  },
  {
    id: '21',
    name: 'Post-Bariatric Body Contouring',
    category: 'body',
    description: 'Body reshaping after massive weight loss',
    detailedDescription: `There are many operations available to post bariatric patients, including tummy tucks and/or apron removal (panniculectomy), arm lifts, thigh lifts, breast reductions, lower body lifts, buttock lifts, and facelifts just to name a few.\n\nThe important thing to remember is that you must be stable in your weight loss, have any medical issues under control, and have a sound nutritional status prior to surgery. This usually occurs about 18 months after your bariatric surgery.\n\nIt is important to set realistic goals about what can be achieved and the timing involved. Everything cannot be done at once, so it is critical to develop a game plan that is sensitive to your wants and desires, but maintains a good surgical decision-making process.`,
    bodyArea: 'body',
    recoveryTime: '4-6 weeks',
    priceRange: '$10,000 - $30,000',
    duration: '4-8 hours',
    anesthesia: 'General',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb1f2025-1764906558706.png",
    alt: 'Body contouring transformation results',
    benefits: [
      'Removal of excess skin',
      'Improved body contours',
      'Enhanced mobility',
      'Better hygiene',
      'Increased confidence',
      'Completion of weight loss journey'
    ],
    idealCandidates: [
      'Stable weight for 18+ months',
      'Massive weight loss patients',
      'Good nutritional status',
      'Medical conditions controlled',
      'Realistic expectations',
      'Strong support system'
    ],
    beforeAfterImages: [
      {
        id: 'ba22',
        beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_182ff5996-1764792567841.png",
        beforeAlt: 'Before post-bariatric body contouring showing excess skin',
        afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_140df08ed-1765003957858.png",
        afterAlt: 'After post-bariatric body contouring with improved contours',
        timeframe: '1 year post-op',
        procedureName: 'Body Contouring'
      }
    ],
    faqs: [
      {
        id: 'faq42',
        question: 'When can I have body contouring after bariatric surgery?',
        answer: 'You should wait until your weight has been stable for at least 18 months after bariatric surgery and your nutritional status is optimized. Medical clearance is also required.'
      },
      {
        id: 'faq43',
        question: 'Can all areas be treated at once?',
        answer: 'No, procedures are typically staged for safety. We develop a comprehensive treatment plan that prioritizes areas and schedules surgeries appropriately, considering your health and recovery capacity.'
      }
    ],
    relatedProcedures: ['6', '19', '20']
  },
  {
    id: '22',
    name: 'Buttock Augmentation',
    category: 'buttocks',
    description: 'Enhance buttock projection and volume',
    detailedDescription: `The projection and total volume of your buttocks can be improved by this procedure. It is often done for those who have lost volume in their back sides or in those who are not seeing the results of hard work in the gym. Three very different kinds of procedures can be performed.\n\nFat injections, also known as the "Brazilian lift", involve removing fat from your body during liposuction and carefully injecting it into the area of concern. Since it is your own tissue, the results can be very natural.\n\nAnother type is an implant. A very soft silicone implant is placed on top of or into the gluteus maximus muscle through a small incision above the tail bone. The change can be subtle or dramatic depending on your preference.\n\nThe final type is soft tissue transfer where dermis and fat are transferred on their blood supply to fill in the buttocks.`,
    bodyArea: 'buttocks',
    recoveryTime: '2-4 weeks',
    priceRange: '$6,000 - $15,000',
    duration: '2-4 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb1f2025-1764906558706.png",
    alt: 'Woman showing enhanced buttock contours',
    benefits: [
      'Enhanced buttock volume',
      'Improved projection',
      'Better body proportions',
      'Natural-looking results (fat transfer)',
      'Customizable enhancement',
      'Increased confidence'
    ],
    idealCandidates: [
      'Flat or small buttocks',
      'Volume loss from aging',
      'Good overall health',
      'Realistic expectations',
      'Adequate fat for transfer (BBL)',
      'Non-smokers'
    ],
    beforeAfterImages: [
      {
        id: 'ba23',
        beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_182ff5996-1764792567841.png",
        beforeAlt: 'Profile before buttock augmentation',
        afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_140df08ed-1765003957858.png",
        afterAlt: 'Profile after buttock augmentation with enhanced volume',
        timeframe: '6 months post-op',
        procedureName: 'Buttock Augmentation'
      }
    ],
    faqs: [
      {
        id: 'faq44',
        question: 'What is the difference between fat transfer and implants?',
        answer: 'Fat transfer (Brazilian Butt Lift) uses your own fat for natural results but requires adequate donor fat. Implants provide predictable, permanent volume but involve foreign material. The choice depends on your body type and goals.'
      },
      {
        id: 'faq45',
        question: 'How long before I can sit normally?',
        answer: 'After buttock augmentation, especially fat transfer, you must avoid direct sitting for 2-3 weeks and use special cushions for several more weeks. This protects the grafted fat and ensures optimal results.'
      }
    ],
    relatedProcedures: ['3', '23', '6']
  },
  {
    id: '23',
    name: 'Calf Augmentation',
    category: 'body',
    description: 'Enhance calf size and definition with implants',
    detailedDescription: `The projection, width, and total volume of your calves can be improved by this procedure. It is often done for those with congenitally small calves or in those who are not seeing the results of hard work in the gym.\n\nA very soft silicone implant is placed near the calf muscle through a small incision behind the knee in the natural skin fold. The change can be subtle or dramatic depending on your preference.\n\nBecause this operation involves your mode of transportation (your legs), it can be a couple of weeks before you are back to your normal activities. However, this has an extremely high rate of satisfaction and the operation is well tolerated.`,
    bodyArea: 'calves',
    recoveryTime: '2-3 weeks',
    priceRange: '$5,000 - $8,000',
    duration: '1-2 hours',
    anesthesia: 'General',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb1f2025-1764906558706.png",
    alt: 'Athletic legs showing enhanced calf definition',
    benefits: [
      'Enhanced calf volume',
      'Improved leg proportion',
      'Better muscle definition',
      'Symmetry correction',
      'Permanent results',
      'High satisfaction rate'
    ],
    idealCandidates: [
      'Small or underdeveloped calves',
      'Asymmetrical calf muscles',
      'Good overall health',
      'Realistic expectations',
      'Active lifestyle',
      'Non-smokers'
    ],
    beforeAfterImages: [
      {
        id: 'ba24',
        beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_182ff5996-1764792567841.png",
        beforeAlt: 'Side view before calf augmentation showing thin calves',
        afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_140df08ed-1765003957858.png",
        afterAlt: 'Side view after calf augmentation with enhanced definition',
        timeframe: '4 months post-op',
        procedureName: 'Calf Augmentation'
      }
    ],
    faqs: [
      {
        id: 'faq46',
        question: 'Will calf implants look natural?',
        answer: 'Yes, modern calf implants are designed to mimic natural muscle contours. They are soft and flexible, creating results that look and feel natural. The size is customized to your body proportions.'
      },
      {
        id: 'faq47',
        question: 'Can I exercise after calf augmentation?',
        answer: 'You can return to light walking within days, but should avoid strenuous exercise and impact activities for 4-6 weeks. Once fully healed, you can resume all normal activities including running and weightlifting.'
      }
    ],
    relatedProcedures: ['22', '3', '20']
  },
  {
    id: '24',
    name: 'Hair Transplantation',
    category: 'facial',
    description: 'Restore hair growth in thinning or balding areas',
    detailedDescription: `Hair transplantation is a surgical procedure that moves hair follicles from a donor area (typically the back or sides of the head) to areas experiencing hair loss or thinning.\n\nModern techniques including Follicular Unit Extraction (FUE) and Follicular Unit Transplantation (FUT) allow for natural-looking results with minimal scarring. The transplanted hair grows naturally and permanently in its new location.\n\nThis procedure is effective for both men and women experiencing pattern baldness, and can also be used to restore eyebrows, beards, and other facial hair.`,
    bodyArea: 'scalp',
    recoveryTime: '1-2 weeks',
    priceRange: '$4,000 - $15,000',
    duration: '4-8 hours',
    anesthesia: 'Local',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_174d50f37-1764644109417.png",
    alt: 'Man with restored natural hairline',
    benefits: [
      'Permanent hair restoration',
      'Natural-looking results',
      'Minimal downtime',
      'No ongoing maintenance',
      'Restored confidence',
      'Can treat multiple areas'
    ],
    idealCandidates: [
      'Pattern baldness',
      'Adequate donor hair',
      'Good overall health',
      'Realistic expectations',
      'Stable hair loss',
      'Age 25 or older'
    ],
    beforeAfterImages: [
      {
        id: 'ba25',
        beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f51273f1-1764644109751.png",
        beforeAlt: 'Front view before hair transplant showing baldness',
        afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_14f312e9d-1764742602630.png",
        afterAlt: 'Front view after hair transplant with full hairline',
        timeframe: '12 months post-op',
        procedureName: 'Hair Transplantation'
      }
    ],
    faqs: [
      {
        id: 'faq48',
        question: 'How long before I see results from hair transplant?',
        answer: 'Transplanted hair initially falls out within 2-3 weeks, which is normal. New growth begins around 3-4 months, with significant improvement by 6 months. Final results are typically visible at 12-18 months post-procedure.'
      },
      {
        id: 'faq49',
        question: 'Is hair transplantation permanent?',
        answer: 'Yes, transplanted hair follicles are permanent. They are taken from areas genetically resistant to balding and maintain these characteristics in their new location. The transplanted hair grows naturally for life.'
      }
    ],
    relatedProcedures: ['12', '4', '1']
  }
];
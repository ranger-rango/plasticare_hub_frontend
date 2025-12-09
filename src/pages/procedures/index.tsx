import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProcedureHero from './components/ProcedureHero';
import CategoryFilter from './components/CategoryFilter';
import AdvancedFilters from './components/AdvancedFilters';
import ProcedureCard from './components/ProcedureCard';
import ProcedureModal from './components/ProcedureModal';
import ComparisonTool from './components/ComparisonTool';
import ConsultationModal from './components/ConsultationModal';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import {
  Procedure,
  ProcedureCategory,
  BodyArea,
  PriceRange,
  RecoveryTime,
  FilterOptions,
  ComparisonProcedure,
  VirtualConsultation } from
'./types';

const ProceduresPage = () => {
  const [procedures] = useState<Procedure[]>([
  {
    id: '1',
    name: 'Rhinoplasty',
    category: 'facial',
    description: 'Surgical reshaping of the nose to improve appearance and function',
    detailedDescription: `Rhinoplasty, commonly known as a nose job, is one of the most popular facial plastic surgery procedures. This transformative surgery can address both aesthetic concerns and functional issues, creating harmony between your nose and other facial features.\n\nOur expert surgeons use advanced techniques to reshape the nasal structure, whether you're looking to refine the tip, reduce a dorsal hump, narrow the bridge, or correct breathing difficulties. The procedure is highly customizable to your unique facial anatomy and aesthetic goals.\n\nUsing state-of-the-art 3D imaging technology, we can preview potential results before surgery, ensuring you have realistic expectations and are completely satisfied with your planned outcome.`,
    bodyArea: 'nose',
    recoveryTime: '1-2 weeks',
    priceRange: '$7,000 - $15,000',
    duration: '2-3 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18173ba4a-1764929356249.png",
    alt: 'Close-up profile view of woman with elegant nose structure in soft natural lighting',
    benefits: [
    'Improved facial harmony and proportion',
    'Enhanced self-confidence',
    'Better breathing function',
    'Correction of birth defects or injury',
    'Natural-looking results',
    'Long-lasting transformation'],

    idealCandidates: [
    'Adults with fully developed facial structure',
    'Non-smokers or willing to quit',
    'Realistic expectations about outcomes',
    'Good overall physical health',
    'Desire to improve nose appearance or function',
    'Stable mental and emotional health'],

    beforeAfterImages: [
    {
      id: 'ba1',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10e48aa41-1765003959157.png",
      beforeAlt: 'Profile view of woman before rhinoplasty showing prominent nasal bridge',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f79f1cdf-1765003959007.png",
      afterAlt: 'Profile view of same woman after rhinoplasty with refined nasal contour',
      timeframe: '6 months post-op',
      procedureName: 'Rhinoplasty'
    },
    {
      id: 'ba2',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1b702fdcd-1765003959139.png",
      beforeAlt: 'Front view of woman before rhinoplasty with wide nasal bridge',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10adc6e47-1765003961143.png",
      afterAlt: 'Front view of same woman after rhinoplasty with narrower refined nose',
      timeframe: '1 year post-op',
      procedureName: 'Rhinoplasty'
    }],

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
    },
    {
      id: 'faq3',
      question: 'Can rhinoplasty improve breathing problems?',
      answer: 'Yes, functional rhinoplasty can correct structural issues like a deviated septum, enlarged turbinates, or collapsed nasal valves that impair breathing. Many patients combine functional and cosmetic improvements in a single procedure for optimal results.'
    }],

    relatedProcedures: ['2', '3', '4']
  },
  {
    id: '2',
    name: 'Breast Augmentation',
    category: 'breast',
    description: 'Enhance breast size and shape with implants or fat transfer',
    detailedDescription: `Breast augmentation is one of the most sought-after cosmetic procedures, designed to enhance breast size, improve symmetry, and restore volume lost due to pregnancy, weight loss, or aging.\n\nOur board-certified surgeons offer multiple approaches including saline implants, silicone gel implants, and natural fat transfer techniques. During your consultation, we'll discuss implant types, sizes, placement options, and incision locations to achieve your desired aesthetic while maintaining natural-looking results.\n\nUsing advanced 3D imaging technology, you can visualize potential outcomes and make informed decisions about your transformation. We prioritize safety, natural aesthetics, and long-term satisfaction in every procedure.`,
    bodyArea: 'breast',
    recoveryTime: '1-2 weeks',
    priceRange: '$6,000 - $12,000',
    duration: '1-2 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd99ffad-1764650957024.png",
    alt: 'Elegant woman in white dress showing natural feminine silhouette in soft studio lighting',
    benefits: [
    'Enhanced breast volume and fullness',
    'Improved body proportion and symmetry',
    'Restored breast shape after pregnancy',
    'Increased clothing options and fit',
    'Boosted self-confidence',
    'Natural-looking results'],

    idealCandidates: [
    'Women seeking larger breast size',
    'Those with asymmetrical breasts',
    'Post-pregnancy volume loss',
    'Good overall health',
    'Realistic expectations',
    'Non-smokers or willing to quit'],

    beforeAfterImages: [
    {
      id: 'ba3',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_2933c408a-1765003964134.png",
      beforeAlt: 'Front view of woman before breast augmentation showing smaller breast volume',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1377f8f0b-1764658636109.png",
      afterAlt: 'Front view of same woman after breast augmentation with enhanced fullness',
      timeframe: '3 months post-op',
      procedureName: 'Breast Augmentation'
    }],

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
    }],

    relatedProcedures: ['5', '6', '7']
  },
  {
    id: '3',
    name: 'Liposuction',
    category: 'body',
    description: 'Remove stubborn fat deposits and contour your body',
    detailedDescription: `Liposuction is a body contouring procedure that removes stubborn fat deposits resistant to diet and exercise. This versatile treatment can target multiple areas including the abdomen, thighs, hips, arms, back, and neck.\n\nUsing advanced techniques like tumescent liposuction, ultrasound-assisted liposuction (UAL), and laser-assisted liposuction (LAL), our surgeons precisely sculpt your body contours while minimizing downtime and maximizing results.\n\nLiposuction is not a weight-loss solution but rather a body sculpting tool for patients near their ideal weight who want to eliminate localized fat pockets and achieve better body proportions.`,
    bodyArea: 'body',
    recoveryTime: '1-2 weeks',
    priceRange: '$3,000 - $10,000',
    duration: '1-4 hours',
    anesthesia: 'Local or General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb1f2025-1764906558706.png",
    alt: 'Fit woman in athletic wear showing toned body contours in bright fitness studio',
    benefits: [
    'Targeted fat removal',
    'Improved body contours',
    'Enhanced muscle definition',
    'Permanent fat cell removal',
    'Minimal scarring',
    'Versatile treatment areas'],

    idealCandidates: [
    'Near ideal body weight',
    'Good skin elasticity',
    'Localized fat deposits',
    'Healthy lifestyle commitment',
    'Realistic expectations',
    'Non-smokers'],

    beforeAfterImages: [
    {
      id: 'ba4',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_182ff5996-1764792567841.png",
      beforeAlt: 'Side view of woman before liposuction showing abdominal fat deposits',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_140df08ed-1765003957858.png",
      afterAlt: 'Side view of same woman after liposuction with contoured flat abdomen',
      timeframe: '4 months post-op',
      procedureName: 'Liposuction'
    }],

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
    }],

    relatedProcedures: ['8', '9', '10']
  },
  {
    id: '4',
    name: 'Facelift',
    category: 'facial',
    description: 'Restore youthful facial contours and reduce signs of aging',
    detailedDescription: `A facelift, or rhytidectomy, is a comprehensive facial rejuvenation procedure that addresses multiple signs of aging including sagging skin, deep creases, jowls, and loss of facial volume.\n\nOur surgeons use advanced techniques including SMAS (superficial musculoaponeurotic system) lifting, deep plane facelifts, and mini facelifts to achieve natural-looking results tailored to your unique facial anatomy and aging patterns.\n\nCombining a facelift with complementary procedures like neck lift, eyelid surgery, or fat grafting can provide comprehensive facial rejuvenation for a refreshed, youthful appearance that looks naturally you.`,
    bodyArea: 'face',
    recoveryTime: '2-3 weeks',
    priceRange: '$12,000 - $25,000',
    duration: '3-5 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_174d50f37-1764644109417.png",
    alt: 'Mature elegant woman with smooth facial skin and defined jawline in natural lighting',
    benefits: [
    'Reduced facial sagging and wrinkles',
    'Restored facial contours',
    'Improved jawline definition',
    'Natural-looking rejuvenation',
    'Long-lasting results',
    'Enhanced self-confidence'],

    idealCandidates: [
    'Moderate to severe facial aging',
    'Good skin elasticity',
    'Realistic expectations',
    'Good overall health',
    'Non-smokers',
    'Stable weight'],

    beforeAfterImages: [
    {
      id: 'ba5',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f51273f1-1764644109751.png",
      beforeAlt: 'Profile view of mature woman before facelift showing facial sagging and jowls',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_14f312e9d-1764742602630.png",
      afterAlt: 'Profile view of same woman after facelift with lifted contours and defined jawline',
      timeframe: '6 months post-op',
      procedureName: 'Facelift'
    }],

    faqs: [
    {
      id: 'faq8',
      question: 'How long do facelift results last?',
      answer: 'Facelift results typically last 10-15 years, though individual results vary based on genetics, lifestyle, and skin care. While the aging process continues, most patients maintain a more youthful appearance than if they had not undergone surgery. Complementary treatments can help extend results.'
    },
    {
      id: 'faq9',
      question: 'Will a facelift look natural?',
      answer: 'Modern facelift techniques focus on natural-looking results that refresh your appearance without creating an "overdone" look. Our surgeons use advanced methods that preserve your unique facial characteristics while addressing aging concerns, ensuring you look like a rejuvenated version of yourself.'
    }],

    relatedProcedures: ['11', '12', '13']
  },
  {
    id: '5',
    name: 'Botox Injections',
    category: 'non-surgical',
    description: 'Smooth wrinkles and fine lines with injectable treatments',
    detailedDescription: `Botox is the most popular non-surgical cosmetic treatment worldwide, offering a quick, effective solution for reducing dynamic wrinkles caused by facial expressions.\n\nThis FDA-approved injectable temporarily relaxes targeted facial muscles, smoothing forehead lines, crow's feet, frown lines, and other expression-related wrinkles. Results appear within 3-7 days and last 3-4 months.\n\nOur experienced injectors use precise techniques to achieve natural-looking results that maintain your facial expressiveness while reducing unwanted lines. Botox can also be used preventatively to slow the formation of new wrinkles.`,
    bodyArea: 'face',
    recoveryTime: 'None',
    priceRange: '$300 - $800',
    duration: '15-30 minutes',
    anesthesia: 'None',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1af1fbb3e-1764644110177.png",
    alt: 'Close-up of woman receiving facial injection treatment with smooth wrinkle-free skin',
    benefits: [
    'Reduced wrinkles and fine lines',
    'No downtime required',
    'Quick treatment sessions',
    'Natural-looking results',
    'Preventative anti-aging',
    'Minimal discomfort'],

    idealCandidates: [
    'Adults with dynamic wrinkles',
    'Good overall health',
    'Realistic expectations',
    'Not pregnant or breastfeeding',
    'No neuromuscular disorders',
    'Desire for non-surgical treatment'],

    beforeAfterImages: [
    {
      id: 'ba6',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18e9c231e-1764676129036.png",
      beforeAlt: 'Close-up of woman before Botox showing forehead wrinkles and frown lines',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_174d50f37-1764644109417.png",
      afterAlt: 'Close-up of same woman after Botox with smooth forehead and reduced lines',
      timeframe: '2 weeks post-treatment',
      procedureName: 'Botox'
    }],

    faqs: [
    {
      id: 'faq10',
      question: 'How long does Botox last?',
      answer: 'Botox results typically last 3-4 months, though individual duration varies based on metabolism, muscle strength, and treatment area. Regular maintenance treatments help sustain results and may extend duration over time as muscles become trained to relax.'
    },
    {
      id: 'faq11',
      question: 'Is Botox safe?',
      answer: 'Yes, Botox has an excellent safety profile with over 20 years of clinical use and FDA approval. When administered by qualified professionals, side effects are minimal and temporary. Common effects include mild bruising or swelling at injection sites, which resolve quickly.'
    }],

    relatedProcedures: ['14', '15', '16']
  },
  {
    id: '6',
    name: 'Tummy Tuck',
    category: 'body',
    description: 'Remove excess skin and tighten abdominal muscles',
    detailedDescription: `Abdominoplasty, commonly known as a tummy tuck, is a transformative body contouring procedure that removes excess skin and fat from the abdomen while tightening weakened or separated abdominal muscles.\n\nThis procedure is ideal for patients who have experienced significant weight loss, pregnancy, or aging-related changes that have left them with loose, sagging abdominal skin and weakened core muscles that don't respond to diet and exercise.\n\nOur surgeons offer various techniques including full abdominoplasty, mini tummy tuck, and extended tummy tuck to address your specific concerns and achieve a flatter, firmer, more toned abdominal profile.`,
    bodyArea: 'abdomen',
    recoveryTime: '2-4 weeks',
    priceRange: '$8,000 - $15,000',
    duration: '2-5 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12dc6ed53-1764672588961.png",
    alt: 'Woman in fitness attire showing toned flat abdomen and defined waistline',
    benefits: [
    'Flatter, firmer abdomen',
    'Tightened abdominal muscles',
    'Improved body contours',
    'Reduced stretch marks',
    'Enhanced clothing fit',
    'Boosted self-confidence'],

    idealCandidates: [
    'Excess abdominal skin',
    'Weakened abdominal muscles',
    'Completed childbearing',
    'Stable weight',
    'Good overall health',
    'Non-smokers'],

    beforeAfterImages: [
    {
      id: 'ba7',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1788da110-1765003959100.png",
      beforeAlt: 'Front view of woman before tummy tuck showing loose abdominal skin',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11127e061-1764656058817.png",
      afterAlt: 'Front view of same woman after tummy tuck with flat toned abdomen',
      timeframe: '6 months post-op',
      procedureName: 'Tummy Tuck'
    }],

    faqs: [
    {
      id: 'faq12',
      question: 'Can I have more children after a tummy tuck?',
      answer: 'While it is possible to have children after a tummy tuck, pregnancy can compromise your results by stretching the abdominal skin and muscles again. We recommend completing your family before undergoing abdominoplasty to ensure long-lasting results.'
    },
    {
      id: 'faq13',
      question: 'Will a tummy tuck help me lose weight?',
      answer: 'A tummy tuck is not a weight loss procedure but rather a body contouring surgery. While you will lose some weight from removed skin and fat, the primary goal is to create a flatter, more toned abdominal profile. Ideal candidates are at or near their goal weight.'
    }],

    relatedProcedures: ['3', '17', '18']
  },
  {
    id: '7',
    name: 'Eyelid Surgery',
    category: 'facial',
    description: 'Rejuvenate tired-looking eyes and improve vision',
    detailedDescription: `Blepharoplasty, or eyelid surgery, addresses aging-related changes around the eyes including drooping upper lids, puffy lower lids, and under-eye bags that can make you look tired, aged, or even impair vision.\n\nThis delicate procedure removes excess skin, muscle, and fat from the upper and/or lower eyelids, creating a more alert, youthful, and refreshed appearance. Upper blepharoplasty can also improve peripheral vision obstructed by sagging eyelids.\n\nOur surgeons use meticulous techniques to achieve natural-looking results that enhance your eyes while preserving your unique characteristics and avoiding an "overdone" appearance.`,
    bodyArea: 'eyes',
    recoveryTime: '1-2 weeks',
    priceRange: '$4,000 - $8,000',
    duration: '1-3 hours',
    anesthesia: 'Local or General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13815544d-1764675675715.png",
    alt: 'Close-up of woman with bright alert eyes and smooth eyelid contours',
    benefits: [
    'More youthful eye appearance',
    'Reduced puffiness and bags',
    'Improved vision (upper lids)',
    'Natural-looking results',
    'Long-lasting effects',
    'Enhanced facial harmony'],

    idealCandidates: [
    'Drooping or sagging eyelids',
    'Under-eye bags or puffiness',
    'Good overall health',
    'Realistic expectations',
    'Non-smokers',
    'No serious eye conditions'],

    beforeAfterImages: [
    {
      id: 'ba8',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_144580766-1765003959564.png",
      beforeAlt: 'Close-up of woman before eyelid surgery showing drooping upper lids and under-eye bags',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd154b95-1764811120508.png",
      afterAlt: 'Close-up of same woman after eyelid surgery with lifted lids and reduced puffiness',
      timeframe: '3 months post-op',
      procedureName: 'Eyelid Surgery'
    }],

    faqs: [
    {
      id: 'faq14',
      question: 'Will eyelid surgery leave visible scars?',
      answer: 'Incisions are strategically placed in the natural creases of the eyelids, making scars virtually invisible once healed. Our surgeons use precise techniques and fine sutures to minimize scarring. Most scars fade significantly within a few months and become imperceptible.'
    },
    {
      id: 'faq15',
      question: 'Can eyelid surgery improve my vision?',
      answer: 'Yes, upper blepharoplasty can improve peripheral vision when drooping eyelids obstruct your field of view. Many patients experience functional improvements along with aesthetic enhancement. In some cases, insurance may cover the procedure if vision impairment is documented.'
    }],

    relatedProcedures: ['4', '19', '20']
  },
  {
    id: '8',
    name: 'Dermal Fillers',
    category: 'non-surgical',
    description: 'Restore volume and smooth wrinkles with injectable fillers',
    detailedDescription: `Dermal fillers are injectable treatments that restore lost facial volume, smooth wrinkles, and enhance facial contours for a more youthful appearance.\n\nWe offer a comprehensive range of FDA-approved fillers including hyaluronic acid-based products (Juvederm, Restylane), calcium hydroxylapatite (Radiesse), and poly-L-lactic acid (Sculptra) to address various aging concerns.\n\nFillers can enhance lips, cheeks, and chin, fill nasolabial folds and marionette lines, smooth under-eye hollows, and restore hand volume. Results are immediate and can last from 6 months to 2 years depending on the product and treatment area.`,
    bodyArea: 'face',
    recoveryTime: 'None',
    priceRange: '$600 - $2,000',
    duration: '30-60 minutes',
    anesthesia: 'None',
    isPopular: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1730719542530-0916358d5c26",
    alt: 'Woman receiving facial filler injection treatment with smooth plump skin',
    benefits: [
    'Immediate volume restoration',
    'Smooth wrinkles and folds',
    'Enhanced facial contours',
    'No downtime required',
    'Natural-looking results',
    'Reversible treatments'],

    idealCandidates: [
    'Volume loss or wrinkles',
    'Good overall health',
    'Realistic expectations',
    'Not pregnant or breastfeeding',
    'No active skin infections',
    'Desire for non-surgical treatment'],

    beforeAfterImages: [
    {
      id: 'ba9',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffe498e9-1764663240453.png",
      beforeAlt: 'Close-up of woman before dermal fillers showing nasolabial folds and volume loss',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_118c32215-1764669220074.png",
      afterAlt: 'Close-up of same woman after dermal fillers with restored volume and smooth contours',
      timeframe: 'Immediately post-treatment',
      procedureName: 'Dermal Fillers'
    }],

    faqs: [
    {
      id: 'faq16',
      question: 'How long do dermal fillers last?',
      answer: 'Filler longevity varies by product type and treatment area. Hyaluronic acid fillers typically last 6-18 months, while longer-lasting options like Sculptra can provide results for up to 2 years. Factors like metabolism, lifestyle, and injection technique affect duration.'
    },
    {
      id: 'faq17',
      question: 'Are dermal fillers safe?',
      answer: 'Yes, FDA-approved dermal fillers have excellent safety profiles when administered by qualified professionals. Side effects are typically mild and temporary, including swelling, bruising, or redness at injection sites. Hyaluronic acid fillers can be dissolved if needed.'
    }],

    relatedProcedures: ['5', '21', '22']
  }]
  );

  const [filteredProcedures, setFilteredProcedures] = useState<Procedure[]>(procedures);
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [consultationProcedure, setConsultationProcedure] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [comparisonList, setComparisonList] = useState<ComparisonProcedure[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    bodyArea: 'all',
    priceRange: 'all',
    recoveryTime: 'all',
    searchQuery: ''
  });

  useEffect(() => {
    let filtered = [...procedures];

    if (filters.category !== 'all') {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    if (filters.bodyArea !== 'all') {
      filtered = filtered.filter((p) => p.bodyArea === filters.bodyArea);
    }

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    setFilteredProcedures(filtered);
  }, [filters, procedures]);

  const handleSearch = (query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  };

  const handleCategoryChange = (category: ProcedureCategory | 'all') => {
    setFilters((prev) => ({ ...prev, category }));
  };

  const handleAdvancedFilterChange = (advancedFilters: {
    bodyArea: BodyArea | 'all';
    priceRange: PriceRange | 'all';
    recoveryTime: RecoveryTime | 'all';
  }) => {
    setFilters((prev) => ({ ...prev, ...advancedFilters }));
  };

  const handleViewDetails = (id: string) => {
    const procedure = procedures.find((p) => p.id === id);
    if (procedure) {
      setSelectedProcedure(procedure);
    }
  };

  const handleAddToComparison = (id: string) => {
    const procedure = procedures.find((p) => p.id === id);
    if (!procedure) return;

    const isInComparison = comparisonList.some((p) => p.id === id);

    if (isInComparison) {
      setComparisonList((prev) => prev.filter((p) => p.id !== id));
    } else if (comparisonList.length < 3) {
      const comparisonProcedure: ComparisonProcedure = {
        id: procedure.id,
        name: procedure.name,
        category: procedure.category,
        priceRange: procedure.priceRange,
        recoveryTime: procedure.recoveryTime,
        duration: procedure.duration,
        benefits: procedure.benefits
      };
      setComparisonList((prev) => [...prev, comparisonProcedure]);
    }
  };

  const handleRemoveFromComparison = (id: string) => {
    setComparisonList((prev) => prev.filter((p) => p.id !== id));
  };

  const handleClearComparison = () => {
    setComparisonList([]);
  };

  const handleBookConsultation = (procedureId: string) => {
    const procedure = procedures.find((p) => p.id === procedureId);
    if (procedure) {
      setConsultationProcedure({ id: procedure.id, name: procedure.name });
      setSelectedProcedure(null);
      setShowConsultationModal(true);
    }
  };

  const handleConsultationSubmit = (data: VirtualConsultation) => {
    console.log('Consultation request:', data);
    setShowConsultationModal(false);
    setConsultationProcedure(null);
    alert('Thank you! Your consultation request has been submitted. Our team will contact you within 24 hours.');
  };

  return (
    <>
      <Helmet>
        <title>Procedures - MedBeauty Clinic | Comprehensive Treatment Catalog</title>
        <meta
          name="description"
          content="Explore our comprehensive range of aesthetic and reconstructive procedures. From facial enhancements to body contouring, find the treatment that aligns with your vision." />

      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <ProcedureHero onSearch={handleSearch} />

          <CategoryFilter
            selectedCategory={filters.category}
            onCategoryChange={handleCategoryChange} />


          <AdvancedFilters onFilterChange={handleAdvancedFilterChange} />

          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-headline text-3xl font-bold text-text-primary mb-2">
                    {filters.category === 'all' ? 'All Procedures' :
                    `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1).replace('-', ' ')} Procedures`}
                  </h2>
                  <p className="font-body text-base text-text-secondary">
                    {filteredProcedures.length} {filteredProcedures.length === 1 ? 'procedure' : 'procedures'} found
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="default"
                  iconName="Download"
                  iconPosition="left"
                  iconSize={18}
                  className="hidden lg:flex">

                  Download Catalog
                </Button>
              </div>

              {filteredProcedures.length === 0 ?
              <div className="text-center py-20">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                    <Icon name="Search" size={40} className="text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl font-semibold text-text-primary mb-3">
                    No Procedures Found
                  </h3>
                  <p className="font-body text-base text-text-secondary mb-6 max-w-md mx-auto">
                    We couldn't find any procedures matching your criteria. Try adjusting your filters or search terms.
                  </p>
                  <Button
                  variant="default"
                  size="default"
                  onClick={() =>
                  setFilters({
                    category: 'all',
                    bodyArea: 'all',
                    priceRange: 'all',
                    recoveryTime: 'all',
                    searchQuery: ''
                  })
                  }
                  iconName="RotateCcw"
                  iconPosition="left"
                  iconSize={18}
                  className="bg-primary hover:bg-primary/90">

                    Clear All Filters
                  </Button>
                </div> :

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProcedures.map((procedure) =>
                <ProcedureCard
                  key={procedure.id}
                  procedure={procedure}
                  onViewDetails={handleViewDetails}
                  onAddToComparison={handleAddToComparison}
                  isInComparison={comparisonList.some((p) => p.id === procedure.id)} />

                )}
                </div>
              }
            </div>
          </section>

          <section className="py-16 bg-gradient-rose-overlay">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold text-text-primary mb-4">
                  Ready to Begin Your Transformation?
                </h2>
                <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
                  Schedule a consultation with our expert surgeons to discuss your goals and create a personalized treatment plan.
                </p>
              </div>

              {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={20}
                  className="bg-primary hover:bg-primary/90 shadow-brand">

                  Book Virtual Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={20}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">

                  Call Us Today
                </Button>
              </div> */}
            </div>
          </section>
        </main>

        {selectedProcedure &&
        <ProcedureModal
          procedure={selectedProcedure}
          onClose={() => setSelectedProcedure(null)}
          onBookConsultation={handleBookConsultation} />

        }

        {showConsultationModal && consultationProcedure &&
        <ConsultationModal
          procedureName={consultationProcedure.name}
          procedureId={consultationProcedure.id}
          onClose={() => {
            setShowConsultationModal(false);
            setConsultationProcedure(null);
          }}
          onSubmit={handleConsultationSubmit} />

        }

        <ComparisonTool
          procedures={comparisonList}
          onRemove={handleRemoveFromComparison}
          onClear={handleClearComparison} />

      </div>
    </>);

};

export default ProceduresPage;
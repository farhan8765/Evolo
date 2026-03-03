# Required Images for Live Website

**Problem:** `public/images/` mein sirf SVG files hain. Code 70+ PNG/JPG images refer karta hai jo repo mein **nahi hain**, isliye live site par images show nahi ho rahi.

**Solution:** Neeche wali saari files ko `public/images/` folder mein copy karo (exact same names ke saath).

---

## Images to Add (public/images/ folder mein)

### Home / Hero
- `evolologo.png`
- `h1.png`
- `Group 5.png`
- `home-second.png`
- `home-fourth.png`
- `hleft.png`
- `hright.png`
- `Homehero.png`

### Student Section
- `student-hero.png`
- `student-feature.png`
- `Student.png`
- `message.png`
- `choose.png`
- `Stud-downer.png`
- `Apple logo.png`
- `Google logo.png`
- `Mobile1.png`
- `Mobile2.png`
- `Mobile3.png`
- `Mobile4.png`

### Institute
- `institute.png`
- `ins1.png`
- `ins2.png`
- `ins3.png`
- `ins4.png`
- `ins5.png`
- `ins6.png`

### Employer
- `Emp-hero.png`

### Partner
- `right.png`
- `left.png`
- `mble2.png`
- `cvmble.png`

### About
- `About.png`
- `About-hero.png`

### Events
- `events.png`
- `eventone.png`
- `eventtwo.png`
- `eventthree.jpeg`
- `amirimg.jpg`
- `cup.jpg`

### Forms / Misc
- `evoloo.png`
- `Footer-logo.png`
- `wcag2.1A-blue-v.png`
- `Evolo-AI.png`
- `Vector.png` (Navbaroriginal)
- `lefticon.png`
- `righticon.png`

### Blog
- `blog1.png` through `blog17.png`
- `blogfour.png`, `blogfive2.png`, `blogsix2.png`, `blogsix3.png`, `blogsix4.png`
- `blogtwoimg2.png`, `blogtwoimg3.png`
- `blogthreeimg2.png`
- `blogoneimg2.png`
- `blognine2.jpg`
- `blogeight2.png`, `blogeight3.png`

### Student Testimonials (public/images/student-test/ folder banao)
- `image 6.png`
- `image 7.png`
- `data.png`
- `data2.png`
- `image 10.png`
- `image 11.png`
- `image 12.png`
- `flogo1.jpg` through `flogo21.jpg`
- `flogo22.jpg` through `flogo33.jpg` (Emptestmonials)

---

## Folder Structure

```
public/
  images/
    evolologo.png
    h1.png
    Group 5.png
    home-second.png
    ... (sab above list se)
    student-test/     ← yeh folder bhi banao
      image 6.png
      image 7.png
      data.png
      ...
      flogo1.jpg
      ...
```

## Note
- **Exact filenames** use karo (spaces, case sensitive - Linux/Vercel case-sensitive hai)
- Files ko `public/images/` mein rakhna hai, tab build ke baad `https://goevolo.com/images/...` par available hongi

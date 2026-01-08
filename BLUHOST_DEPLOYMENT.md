# Bluehost Deployment Guide - 403 Error Fix

## Step-by-Step Instructions

### 1. Build Your Project
```bash
npm run build
```

### 2. Upload Files to Bluehost
- Go to Bluehost cPanel → File Manager
- Navigate to `public_html` folder (or your domain root)
- Upload ALL files from the `build` folder to `public_html`

### 3. Important Files to Upload
Make sure these files are in the root (`public_html`):
- ✅ `.htaccess` (MUST be uploaded - enable "Show Hidden Files" in File Manager)
- ✅ `index.html`
- ✅ `static/` folder (with all CSS and JS files)
- ✅ `images/` folder
- ✅ `manifest.json`
- ✅ `robots.txt`
- ✅ `sitemap.xml`

### 4. Set File Permissions
In Bluehost File Manager:
- **Files**: 644
- **Folders**: 755
- **`.htaccess`**: 644

### 5. Verify .htaccess File
1. In File Manager, click "Settings"
2. Enable "Show Hidden Files"
3. Check if `.htaccess` file is visible in root directory
4. If not, upload it manually from `build` folder

### 6. Check Directory Structure
Your `public_html` should look like this:
```
public_html/
├── .htaccess          ← MUST be here!
├── index.html         ← MUST be here!
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── images/
├── manifest.json
├── robots.txt
└── sitemap.xml
```

### 7. If Still Getting 403 Error

#### Option A: Check Apache Modules
1. Go to Bluehost cPanel
2. Find "Apache Modules" or "Select PHP Version"
3. Ensure `mod_rewrite` is enabled

#### Option B: Contact Bluehost Support
Ask them to:
- Enable `mod_rewrite` module
- Check if there are any server-level restrictions
- Verify file permissions are correct

#### Option C: Alternative .htaccess (if above doesn't work)
If the simple .htaccess doesn't work, try this version:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 8. Clear Browser Cache
After uploading, clear your browser cache and try again.

### 9. Test Your Website
Visit your domain and check:
- Homepage loads correctly
- All routes work (try `/blog`, `/about-us`, etc.)
- Images load properly
- No console errors

## Common Issues

### Issue: 403 Forbidden Error
**Solution**: 
- Ensure `.htaccess` file is uploaded
- Check file permissions (644 for files, 755 for folders)
- Verify `mod_rewrite` is enabled

### Issue: Blank Page
**Solution**:
- Check browser console for errors
- Verify `index.html` is in root directory
- Check if all JS/CSS files are uploaded in `static/` folder

### Issue: Routes Not Working
**Solution**:
- Ensure `.htaccess` file is present and correct
- Check if `mod_rewrite` is enabled on server

## Need Help?
If issues persist, contact Bluehost support with:
- Your domain name
- Error message (403 Forbidden)
- Screenshot of File Manager showing your file structure


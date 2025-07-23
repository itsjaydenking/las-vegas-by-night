# Las Vegas by Night

**Las Vegas by Night** is an interactive storyteller's toolkit and comprehensive fan-made supplement for Vampire: The Masquerade 5th Edition, exploring the dark underbelly and supernatural politics of Sin City.

## Overview

Step into the neon-lit shadows of Las Vegas, where ancient Kindred manipulate casino empires, blood flows like champagne, and every bet could be your last. This digital companion provides Storytellers and players with rich lore, interactive tools, and atmospheric resources to bring the World of Darkness to life in America's most decadent city.

## Features

### 🎲 **V5-Compliant Dice Roller**

- Complete Vampire: The Masquerade 5th Edition mechanics implementation
- Hunger dice system with bestial failure detection
- Critical success calculations (pairs of 10s)
- Messy critical tracking for hunger dice complications
- Willpower reroll system (up to 3 dice)
- One-click rouse checks with automatic setup
- Dynamic dice management (add/remove dice mid-session)
- Visual dice representation with outcome symbols

### 🏛️ **Rich Historical Content**

- Comprehensive timeline spanning both mortal and Kindred history
- Detailed chronicles from Wild West frontier to modern surveillance state
- The Sheepfold Purge: Second Inquisition operations in Las Vegas
- Interactive historical navigation with dynamic content loading
- Pre-Camarilla, Camarilla Golden Age, and post-purge eras

### 🧛 **Interactive Kindred Database**

- Clan-based navigation system with 16 V5 clans
- Detailed character profiles with full V5 statistics
- Background stories, domains, and relationship webs
- Dynamic character selection and detailed stat blocks
- Expandable roster system for easy character additions
- Post-Sheepfold survivors and new arrivals

### 🌆 **Comprehensive Location Guide**

- Three-tier location system: Categories → Areas → Specific Locations
- **Major Las Vegas**: The Strip, Downtown, Paradise
- **Nearby Locations**: Henderson, Summerlin, North Las Vegas, and 6 other suburbs
- **Beyond Las Vegas**: Los Angeles connections, Chicago politics, Mississippi Delta mysticism
- Detailed location profiles with Kindred presence and plot hooks
- Security levels, access information, and storytelling opportunities

### 🎨 **Themed Interface**

- Dark, gothic aesthetic matching the World of Darkness theme
- Responsive design optimized for desktop and tablet use
- Modular CSS architecture with component-based organization
- Custom scrollbars and atmospheric visual effects
- Smooth animations and hover effects
- Blood-red accent colors with professional typography

### 📚 **Storyteller Resources**

- Plot hooks integrated into location and character descriptions
- Setting-specific complications and story seeds
- V5 rule references and quick mechanics
- Atmospheric details and mood setting elements
- Modular content for chronicle customization

## Current Sections

### ✅ **Implemented**
- **🏠 Home**: Welcome page with toolkit overview and getting started guide
- **🎲 Dice Roller**: Full V5 mechanics with hunger dice, rouse checks, and willpower rerolls
- **🩸 Kindred Database**: Interactive clan browsing with detailed character profiles
- **🌆 Locations Guide**: Three-tier location system with rich lore and plot hooks
- **📜 History**: Comprehensive timeline from frontier days to modern surveillance state
- **📜 Changelog**: Detailed version history and development progress

### 🚧 **In Development**
- **👥 Coteries of Las Vegas**: Group dynamics and pack structures
- **📋 Lore Sheets**: V5-style backgrounds and chronicle hooks
- **🎭 Chronicles of Las Vegas**: Pre-written story scenarios
- **📖 Additional Reading**: Expanded lore and reference materials
- **🔗 Resources**: Links to official materials and community tools

## Getting Started

### System Requirements

- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- JavaScript enabled
- Minimum screen resolution: 1024x768
- Internet connection for initial load

### Navigation

- **Sidebar Navigation**: Click section buttons to explore different areas
- **Interactive Systems**: Use clan/location buttons for detailed browsing
- **Dice Roller**: Access V5-compliant rolling with full hunger mechanics
- **Content Scrolling**: Hover over content areas to reveal custom scrollbars

### For Storytellers

- Start with **History** to understand the setting's evolution
- Explore **Locations** for scene setting and territorial conflicts
- Review **Kindred** profiles for NPC inspiration and relationships
- Use **Dice Roller** for live session mechanics and quick rolls

### For Players

- Read **History** for character background inspiration
- Browse **Kindred** to understand local power structures
- Explore **Locations** to find character domains and havens
- Reference **Dice Roller** for understanding V5 mechanics

## Technical Features

- **CSS Grid Layout**: Responsive, modern layout system
- **CSS Custom Properties**: Consistent theming and easy customization
- **Modular Architecture**: Component-based file organization
- **Vanilla JavaScript**: No external frameworks required
- **Progressive Enhancement**: Core content works without JavaScript
- **Dynamic Content Loading**: Sections loaded on-demand for performance
- **Interactive State Management**: Sophisticated UI interactions without frameworks

## Browser Support

- ✅ Chrome 90+ (Recommended)
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ Internet Explorer: Not supported

## Planned Features

### 🔮 **Short-term Roadmap (Next Updates)**

- **Coteries System**: Interactive group creation and management
- **Lore Sheets**: V5-style background advantages and chronicle connections
- **Chronicle Generator**: Pre-built story scenarios and campaign frameworks
- **Resource Library**: Curated links to official V5 materials and community resources
- **Search Functionality**: Find characters, locations, and lore quickly

### 🌟 **Long-term Vision**

- **Interactive Character Sheet**: Digital V5 character creation and management
- **Session Management**: Note-taking, XP tracking, and session logs
- **Territory Mapping**: Visual domain representation with influence tracking
- **Random Generators**: NPCs, plot hooks, and complication generators
- **Mobile App**: Progressive Web App for tablet and phone use
- **Community Features**: User-submitted content and chronicle sharing

### 🎭 **Advanced Features**

- **Dark Mode Toggle**: Alternative color scheme for different preferences
- **Print Stylesheets**: Clean printing for handouts and reference sheets
- **Offline Mode**: Service worker for offline access to core content
- **Multiple Domains**: Expansion to other World of Darkness cities
- **Audio Integration**: Atmospheric sound design and music recommendations
- **VTT Integration**: Export compatibility with virtual tabletop systems

## Development

### Local Development

1. Clone or download the repository
2. Open `index.html` in a modern web browser
3. No build process required - edit files and refresh

### Adding Content

#### New Sections
1. Create HTML file in `sections/` directory
2. Add navigation button to `index.html` sidebar
3. Update JavaScript router in `index.js`
4. Add corresponding CSS in `blocks/` if needed

#### Expanding Kindred Database
1. Edit `scripts/kindredSystem.js`
2. Add character objects to clan arrays in `kindredData`
3. Include full V5 statistics and background information

#### Adding Locations
1. Edit `scripts/locationsSystem.js`
2. Add location objects to appropriate area arrays in `locationData`
3. Include plot hooks, security information, and Kindred presence

### Customization

- **Color Schemes**: Modify `blocks/palette.css` for theme changes
- **Layout Adjustments**: Edit `blocks/page.css` for structural changes
- **Component Styling**: Add new CSS files in `blocks/` directory
- **Content Structure**: Use `sections/(template).html` as starting point

## Contributing

This fan project welcomes community contributions and feedback:

### Content Guidelines

- All content must respect Vampire: The Masquerade lore and setting
- Original material should fit established tone and V5 mechanics
- Maintain consistency with official terminology and rules
- Include proper plot hooks and storytelling elements
- Ensure accessibility and readability

### Technical Contributions

- Follow existing code structure and naming conventions
- Test across supported browsers before submitting
- Document new features and significant changes
- Maintain modular CSS architecture
- Ensure responsive design principles

## Legal & Licensing

### Copyright Notice

This is an unofficial fan project created for the Vampire: The Masquerade community. All original Vampire: The Masquerade content, characters, and concepts are the property of:

- **Paradox Interactive** (Current IP owner)
- **White Wolf Publishing** (Original creator)

### Project License

This fan project is distributed under the following terms:

- **Personal Use Only**: Free for personal, non-commercial use
- **Educational Purpose**: Suitable for game groups and storytelling
- **No Commercial Use**: Cannot be sold, monetized, or used commercially
- **Attribution Required**: Credit original creators when sharing or adapting

### Dark Pack & Community Content Policy

This project follows the **Dark Pack Community Content** guidelines established by Paradox Interactive for fan-created Vampire: The Masquerade content. All material respects the intellectual property rights of the license holders.

## Credits & Acknowledgments

**Created By:**
- **Bardhouse Studios** - Primary development and design
- **Ebonmane Ink Creative Studios** - Content creation and lore development

**Special Thanks:**
- The World of Darkness community for inspiration and feedback
- All contributors and playtesters who helped refine the toolkit
- The storytellers and players who bring these stories to life

**Inspired By:**
- The rich lore and mechanics of Vampire: The Masquerade 5th Edition
- The neon-soaked, surveillance-heavy atmosphere of modern Las Vegas
- Decades of gothic-punk storytelling in the World of Darkness

**Technical Acknowledgments:**
- Modern CSS Grid and Flexbox specifications
- Web Standards for accessibility and performance
- Open source community for development best practices

## Support & Community

- **Issues & Bugs**: Report technical problems via GitHub Issues
- **Discussions**: Join community discussions on [Discord](https://discord.com/channels/849707537120886814/1384959714638692423)
- **Updates**: Follow development progress and announcements on [Discord](https://discord.com/channels/849707537120886814/1384959714638692423)
- **Support Development**: [Buy the developers a coffee](https://ko-fi.com/itsjaydenking/5)
- **Book a Session**: [Play with creator Jayden King](https://ko-fi.com/s/5de60681ec)

---

_"In Las Vegas, everyone's a winner... until they're not."_

**Vampire: The Masquerade © Paradox Interactive**  
**This is an unofficial fan project**

---

**Version:** 0.3.0  
**Last Updated:** July 2025  
**Compatibility:** Vampire: The Masquerade 5th Edition  
**Status:** Active Development
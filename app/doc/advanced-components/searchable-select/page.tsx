import React from 'react';
import BasicSearchableSelectSection from "@/app/doc/advanced-components/searchable-select/sections/BasicSearchableSelectSection";
import DisabledSearchableSelectSection from "@/app/doc/advanced-components/searchable-select/sections/DisabledSearchableSelectSection";
import CustomizableItemSearchableSelectSection from "@/app/doc/advanced-components/searchable-select/sections/CustomizableItemSearchableSelectSection";
import FocusOpenSearchableSelectSection from "@/app/doc/advanced-components/searchable-select/sections/FocusOpenSearchableSelectSection";

import AccessibilitySearchableSelectSection from "@/app/doc/advanced-components/searchable-select/sections/AccessibilitySearchableSelectSection";
import ImportSearchableSelectSection
    from "@/app/doc/advanced-components/searchable-select/sections/ImportSearchableSelectSection";
import ApiSearchableSelectSection
    from "@/app/doc/advanced-components/searchable-select/sections/ApiSearchableSelectSection";
import {PTag} from "@/app/components/src";

export const metadata = {
    title: 'Searchable Select',
    description: 'A component where you can perform both search and selection operations and customize your server-side requests.',
    keywords: 'react, searchable-select',
}
const SearchableSelectPage = () => {
    return (
        <>
            <ImportSearchableSelectSection />
            <BasicSearchableSelectSection />
            <CustomizableItemSearchableSelectSection />
            <DisabledSearchableSelectSection />
            <FocusOpenSearchableSelectSection />
            <AccessibilitySearchableSelectSection />
            <ApiSearchableSelectSection />

        </>
    );
};

export default SearchableSelectPage;
declare module "xelement"
{
    /**
     * Converts xml string to XElemnt
     * @data xml stirng input
     */
    export function Parse(data: string | Uint8Array): XElement;

    /**
     * Converts json string or object to XElement
     * @elementName: elementName
     */
    export function ParseJson(data: string | Object, elementName: string): XElement;

    /** XElement class
     * name: name of the element or node name
     * attr: an object represents all attributes of the element. The default value is {}
     * value: value of the element
     * elements: array of child elements. The default value is [].
     * parent: refers to the parent element.
     */
    export class XElement
    {
        name: string;
        attr: any;
        value: any;
        elements: Array<XElement>;
        parent: XElement;

        constructor(name: string, value?: any);

        /**
         * Returns the array of all descendant element with specified name by default parameter is empty on unspecified and it will return all descendant elements, ignoreCase is the flag whether to ignore the case of the element name, by default set to false. On unsuccessful result it will return [].
         * @name element ame
         * @ignoreCase ignore case for element name         
         */
        descendants(name: string, ignoreCase?: boolean): Array<XElement>;

        /**
         * Returns the array of all descendant element with specified name and self by default parameter is empty on unspecified and it will return all descendant elements, ignoreCase is the flag whether to ignore the case of the element name, by default set to false. On unsuccessful result it will return [].
         * @name element ame
         * @ignoreCase ignore case for element name
         */
        descendantsAndSelf(name: string, ignoreCase?: boolean): Array<XElement>;

        /**
         * Returns the first descendant element with specified name, name is not optional , ignoreCase is the flag whether to ignore the case of the element name, by default set to false. On unsuccessful result it will undefined.
         * @name element ame
         * @ignoreCase ignore case for element name
         */
        descendantFirst(name: string, ignoreCase?: boolean): XElement;

        /**
         * Returns the ancestor parent with specified name. ignoreCase is the flag whether to ignore the case of the element name, by default set to false. On unsuccessful result it will return undefined.
         * @name element ame
         * @ignoreCase ignore case for element name
         */
        ancestor(name: string, ignoreCase?: boolean): XElement;

        /**
         * Returns the first child element, returns undefine if doesn’t exist.
         */
        firstElement(): XElement;

        /**
         * Returns the last child element, return undefined if doesn’t exist.
         */
        lastElement(): XElement;

        /**
         * Returns the siblings of the element with specified name, if name unspecified it returns all siblings. Return [] if doesn’t exist.
         * @name elementName
         */
        siblings(name?: string): Array<XElement>;

        /**
         * Returns the previous sibling of the element, it returns undefined if doesn’t exist.
         */
        previousSibling(): XElement;

        /**
         * Returns the next sibling of the element, it returns undefined if doesn’t exist.
         */
        nextSibling(): XElement;

        /**
         * Returns the index of the element among its sibling. Index starts from 0. It returns undefined if the element is not a child other element.
         */
        index(): Number;

        /**
         * Sets the value to specified attribute of the element. If the attribute doesn’t exist, it will create.
         * @name element name   
         * @value value
         */
        setAttr(name: string, value: any): void;

        /**
         * Returns the value from specified attribute of the element. If the attribute doesn’t exist it will return empty.
         * @name element name
         */
        getAttr(name: string): any;

        /**
         * Remove the specified attribute from the element.
         * @name element name
         */
        removeAttr(name: string): void;

        /**
         * Adds xelement as its child element. Single or array of xelement can be passed. Only valid xelement object will be added and others ignored.
         * @element XElement object
         */
        add(element: XElement): void;

        /**
         * Create a new element and adds to its child elements. If value parameter is unspecified it will consider as empty.
         * @name element name
         * @value value
         */
        createElement(name: string, value?: any): XElement;

        /**
         * Return the first element with specified name, name is not optional. It returns undefined if doesn’t exist.
         * @name element name
         * @ignoreCase ignore case
         */
        element(name: string, ignoreCase?: boolean): XElement;

        /**
         * Return the all elements with specified name, if name unspecified it will return all child elements.
         * @name element ame
         * @ignoreCase ignore case for element name
         */
        getElements(name: string, ignoreCase?: boolean): Array<XElement>;

        /**
         * Return the first element value with specified name, name is not optional.
         * @name element ame
         * @ignoreCase ignore case for element name
         */
        getElementValue(name: string, ignoreCase?: boolean): any;

        /**
         * Sets the specified child element value. If element doesn’t exist it will create new.
         * @name element name
         * @value value
         */

        setElementValue(name: string, value: any): void;
        /**
        * return true if the element has any child elements.
        */
        hasElements: boolean;
        /**
        * return true if the element has any attribues.
        */
        hasAttr: boolean;

        /**
         * Remove the current element from its parent. The element will be no longer associated with element tree.
         */
        remove(): void;
        /**
         * Removes the all child elements. All child elements will be no longer associated with element tree.
         */
        removeAll(): void;
        /**
         * Converts the xelement into valid xml string. This function is available for each element in the tree thus xml string can be created from any element from the tree.
         */
        toXmlString(): string;

        /**
         * Converts the xelement into JSON object. This function is available for each element in the tree thus JSON object can be created from any element from the tree.
         * @options : { includeAttributes : true/false to specifiy to include attrubes in the JSON. default value is fale }
         */
        toJSON(): any;
    }



}




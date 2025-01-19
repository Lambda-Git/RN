import { useState, useRef, useEffect } from 'react';

import Style from './index.module.scss';

/**
 * @param options 数据源
 * @param onSelect 选择后的回调
 * @param renderLabelProp 选择后 标题栏展示内容
 * @param showSearch 是否需要筛选
 * @param searchField 筛选条件
 * @param renderListOption 自定义列表内容
*/

const CustomSelect = ({ options, onSelect, renderLabelProp, showSearch, searchField, defaultValue, renderListOption,styleP={}  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);
    const [selectIndex, setSlectIndex] = useState(defaultValue);
    const [selectedOption, setSelectedOption] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const selectRef = useRef(null);

    useEffect(() => {
        if (options.length === 0) return;
        options.map((item, index) => index === selectIndex && setSelectedOption(item));
    }, [options]);

    useEffect(() => {
        if (options.length === 0) return;

        let formatData = options;
        if (showSearch) {
            formatData = options?.filter(option => option[searchField || 'label']?.toLowerCase()?.includes(searchValue?.toLowerCase()));
        };
        
        setData(formatData);
    }, [options, searchValue]);

    useEffect(() => {
        // 点击页面其他地方时关闭下拉列表
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchValue('')
            };
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (value, index) => {
        setSlectIndex(index)
        setSelectedOption(value);
        setIsOpen(false);
        setSearchValue('')
        if (onSelect) {
            onSelect(value);
        };
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className={Style.component+' '+(styleP?.com||'')} ref={selectRef}>
            <div className={Style.option+' '+(styleP?.opt||'')} onClick={handleToggle}>
                {renderLabelProp ? renderLabelProp(selectedOption) : selectedOption?.label}
                <i className='iconfont icon-triangle-down'></i>
            </div>
            {
                isOpen
                &&
                <div className={`${Style.list} ${styleP?.selList||''}`}>
                    {
                        showSearch
                        &&
                        <div className={Style.list_input}>
                            <input
                                type="text"
                                placeholder=""
                                value={searchValue}
                                onChange={handleSearchChange}
                                autoFocus={true}
                            />
                        </div>
                    }
                    {
                        data.length > 0
                        ?
                        <ul>
                        {
                            data.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleOptionClick(item, index)}
                                    className={index === selectIndex ? Style.current : ''}
                                >
                                    <div className={Style.list_item}>
                                        {renderListOption ? renderListOption(item) : item.label}
                                    </div>
                                </li>
                            ))
                        }
                        </ul>
                        :
                        <div className={Style.no_matches}>No records found.</div>
                    }
                </div>
            }
        </div>
    );
};

export default CustomSelect;

import * as React from 'react';
import PropTypes from 'prop-types';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const ProjectTimeline = ({data}) => {
    const lastItem = data.value.pop();
    return (
        <>
        <div style ={{width: 300, margin: 20}}>
            <h3>{data.name}</h3>
            <Timeline>
            {(data.value).map(item => {
                return (
                    <TimelineItem>
                    <TimelineSeparator>
                        <NodeColor node= {item} current = {data.current} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{item.item}</TimelineContent>
                    </TimelineItem>
                )
            })}
                    <TimelineItem>
                    <TimelineSeparator>
                    <NodeColor node= {lastItem} current = {data.current} />
                    </TimelineSeparator>
                    <TimelineContent>{lastItem.item}</TimelineContent>
                    </TimelineItem>
        </Timeline>
      </div>
        </>
    )
}

const NodeColor = (node, current) =>{
    if(parseInt(node.node.index) < parseInt(node.current)) {
        return (
        <>
        <TimelineDot color="success" />
        </>)
    }
    if(parseInt(node.node.index) == parseInt(node.current)) {
        return (
        <>
        <TimelineDot color="warning" />
        </>)
    }
    return (
    <>
    <TimelineDot/>
    </>)
}

NodeColor.propTypes = {
    node: PropTypes.object,
    current: PropTypes.number
}

ProjectTimeline.propTypes = {
    data: PropTypes.object,
}

export default ProjectTimeline;
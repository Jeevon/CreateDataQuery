module.exports = {
        AccountMaxReads: {
            unit: 'Count',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        AccountMaxTableLevelReads: {
            unit: 'Count',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        AccountMaxTableLevelWrites: {
            unit: 'Count',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        AccountMaxWrites: {
            unit: 'Count',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        AccountProvisionedReadCapacityUtilization: {
            unit: 'Percent',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        AccountProvisionedWriteCapacityUtilization: {
            unit: 'Percent',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        ConditionalCheckFailedRequests: {
            unit: 'Count',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        ConsumedReadCapacityUnits: {
            unit: 'Count',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        ConsumedWriteCapacityUnits: {
            unit: 'Count',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        MaxProvisionedTableReadCapacityUtilization: {
            unit: 'Percent',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        MaxProvisionedTableWriteCapacityUtilization: {
            unit: 'Percent',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        OnlineIndexConsumedWriteCapacity: {
            unit: 'Count',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        OnlineIndexPercentageProgress: {
            unit: 'Count',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        OnlineIndexThrottleEvents: {
            unit: 'Count',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        PendingReplicationCount: {
            unit: 'Count',
            stat: [
                'Average',
                'Sum',
                //'SampleCount'
            ]
        },
        ProvisionedReadCapacityUnits: {
            unit: 'Count',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        ProvisionedWriteCapacityUnits: {
            unit: 'Count',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        ReadThrottleEvents: {
            unit: 'Count',
            stat: [
                //'SampleCount',
                'Sum'
            ]
        },
        ReplicationLatency: {
            unit: 'Milliseconds',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        ReturnedBytes: {
            unit: 'Bytes',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        ReturnedItemCount: {
            unit: 'Count',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        ReturnedRecordsCount: {
            unit: 'Count',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        SuccessfulRequestLatency: {
            unit: 'Milliseconds',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        SystemErrors: {
            unit: 'Count',
            stat: [
                //'SampleCount',
                'Sum'
            ]
        },
        TimeToLiveDeletedItemCount: {
            unit: 'Count',
            stat: [
                'Sum'
            ]
        },
        ThrottledRequests: {
            unit: 'Count',
            stat: [
                //'SampleCount',
                'Sum'
            ]
        },
        TransactionConflict: {
            unit: 'Count',
            stat: [
                'Average',
                'Maximum'
            ]
        },
        UserErrors: {
            unit: 'Count',
            stat: [
                //'SampleCount',
                'Sum'
            ]
        },
        WriteThrottleEvents: {
            unit: 'Count',
            stat: [
                //'SampleCount',
                'Sum'
            ]
        },
}